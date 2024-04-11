import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data for the resource!')
            }
        return res.json();
    })
        .then((data) => {
            setBlogs(data); 
            setIsLoading(false)})
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            })
    },[]);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
        </div> 
    );
}

export default Home;