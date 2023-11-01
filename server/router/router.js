import express from "express";
export const router = express.Router();
import { postComment, getProducts, postService } from "../controller/controller.js";  

router.get("/", getProducts).post("/", postComment).post("/services", postService);
