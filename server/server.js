import express from "express";
import { config } from "dotenv";
import cors from "cors";

import blogsRouter from "./routes/blogs.route.js";
import { connectDB } from "./config/db.config.js";

const app = express();
const PORT = process.env.PORT;

config();

cors();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", blogsRouter);

app.listen(PORT, () => {
    connectDB()
        .then(() => {
            console.log(`Server is ready for production!\n`);
        })
        .catch((error) => {
            console.log(error);
        });
});
