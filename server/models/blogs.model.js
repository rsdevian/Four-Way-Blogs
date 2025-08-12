import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
    },
    body: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"],
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author must be at least 3 characters long"],
    },
});

const Blog = model("Blog", blogSchema);

export default Blog;
