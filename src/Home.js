import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => { 
    const {data, isLoading, error} = useFetch("http://localhost:8000/blogs");
    // eslint-disable-next-line no-unused-vars
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <Bloglist blogs={data} title="All Blogs"/>}
        </div> 
    );
}

export default Home;