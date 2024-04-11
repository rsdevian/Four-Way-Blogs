const Bloglist = ({ blogs, title}) => {
    return (
        <div>
        <h2>{title}</h2>
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Bloglist;