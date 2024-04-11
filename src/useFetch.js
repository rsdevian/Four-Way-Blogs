 import { useState, useEffect } from 'react';

 const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data for the resource!')
            }
        return res.json();
    })
        .then((data) => {
            setData(data); 
            setIsLoading(false)})
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    },[url]);

    return { data, isLoading, error};
 }

 export default useFetch