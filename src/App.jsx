import './App.css'
import EmailList from './components/EmailList'
import { useState } from "react";
import axios from "axios";
import Navbar from './components/Navbar'
import EmailBody from './components/EmailBody';

function App() {
  const [lists, setLists] = useState([]);
  const [listBody, setListBody] = useState(null);
  const [selectedList, setSelectedList] = useState('');

  const handleListItemClick = (id) => {
       setSelectedList(lists.find((list) => list.id === id));
        axios.get('https://flipkart-email-mock.now.sh/?id=' + id)
            .then(res => {
                setListBody(res.data.body);
              })
  
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="row">
        <div className='col'>
        <EmailList lists={lists} setLists={setLists} handleListItemClick={handleListItemClick}/>
        </div>
        {listBody && <div className='col'>
        <EmailBody listBody={listBody} list={selectedList}/>
        </div>}
        </div>
      </div>
      
    </div>
  )
}

export default App
