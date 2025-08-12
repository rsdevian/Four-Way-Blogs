import {
    useHistory,
    useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { baseUrl } from "./url";

const BlogDetails = () => {
    const { id } = useParams();
    const {
        data: blog,
        error,
        isLoading,
    } = useFetch(`${baseUrl}/api/blogs/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`${baseUrl}/api/blogs/${blog._id}`, {
            method: "DELETE",
        }).then(() => {
            history.push("/");
        });
    };

    return (
        <div className='blog-details'>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> Writte by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;
