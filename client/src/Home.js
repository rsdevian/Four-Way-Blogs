import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
import { baseUrl } from "./url";

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch(`${baseUrl}/api/blogs`);
    // eslint-disable-next-line no-unused-vars
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
        </div>
    );
};

export default Home;
