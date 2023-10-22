import useList from "../hooks/useList";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmailList = ({lists, setLists, handleListItemClick}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        
        setLoading(true);
        axios.get('https://flipkart-email-mock.now.sh/')
            .then(res => {
                setLists(res.data.list);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            })        
    }, [])

    
    return ( 
        <>
        {lists.map(list => (
              <Container className="list" key={list.id} onClick={() => handleListItemClick(list.id)}>
              <Row>
              <Col sm={1}>
                <div className="icon">
                    <h3>{list.from.name[0]}</h3>
                </div>
              </Col>
              <Col sm={8}>
                  <div>
                      <header>From: {list.from.name} {list.from.email}</header>
                      <p>Subject: {list.subject}</p>
                      <p>{list.short_description}</p>
                      <footer>{new Date(list.date).toLocaleString()}</footer>
                  </div>
              </Col>
              </Row>
          </Container>
        ))}
        </>
    );
}
 
export default EmailList;