import { useState } from "react";

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
            <h2>HomePage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div> 
    );
}

export default Home;