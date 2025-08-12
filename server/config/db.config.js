import mongoose from "mongoose";
import { config } from "dotenv";

config();

const dbURI = process.env.MONGO_DB_URI;

async function connectDB() {
    try {
        await mongoose.connect(dbURI);
        console.log("\nConnected to database!");
    } catch (error) {
        console.log(error);
    }
}

export { connectDB };
