import express from "express";

import {
    getAllBlogs,
    createBlog,
    getBlogById,
    deleteBlogById
} from "../controllers/blogs.controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", createBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);

export default router;
