import express from "express";
import { router } from "./router/router.js";
import cors from "cors";
//import connectDB from "./database/connectDB.js";
import mongoose from "mongoose";
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.listen(PORT, async () => {
    //await connectDB("mongodb+srv://admin:affirmativeV8@cluster0.9hzjtcz.mongodb.net/")
    await mongoose.connect("mongodb+srv://admin:affirmativeV8@cluster0.9hzjtcz.mongodb.net/");
    console.log(`server is running on port ${PORT}`);
})