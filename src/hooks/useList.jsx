import axios from "axios";
import { useEffect, useState } from "react";

const useList = () => {

    const [lists, setLists] = useState([]);
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
    
    return {lists, error, loading};
}
 
export default useList;