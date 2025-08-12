import express from "express";

import { getAllBlogs } from "../controllers/blogs.controller.js";

const router = express.Router();

router.get("/", getAllBlogs);

export default router;
