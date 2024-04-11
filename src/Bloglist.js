const Bloglist = ({ blogs, title, handleClick}) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <button onClick={() => handleClick(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;