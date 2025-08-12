import express from "express";

import { getAllBlogs, createBlog } from "../controllers/blogs.controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/create", createBlog);

export default router;
