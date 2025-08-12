import Blog from "../models/blogs.model.js";

async function getAllBlogs(_, res) {
    try {
        const blogs = await Blog.find();
        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found" });
        }
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

async function createBlog(req, res) {
    try {
        const { title, body, author } = req.body;
        const blog = new Blog({ title, body, author });
        await blog.save();
        return res
            .status(201)
            .json({ message: "Blog created successfully", blog });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

async function getBlogById(req, res) {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error",
        });
    }
}

async function deleteBlogById(req, res) {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Internal Server Error",
        });
    }
}

export { getAllBlogs, createBlog, getBlogById, deleteBlogById };
