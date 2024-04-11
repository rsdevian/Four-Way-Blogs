import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([
        {
            title: 'My New Website', body: 'lorem ipsum.....', id: 1
        },
        {
            title: 'Welcome Party', body: 'lorem ipsum......', id: 2
        }
    ])
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs"/>
        </div> 
    );
}

export default Home;