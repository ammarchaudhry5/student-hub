import { Router } from "express";
import { PostController } from "../controllers/post.controller.ts";

const router: Router = Router();

const controller = new PostController();

// Create a new post
router.post("/create", (req, res) => controller.createPost(req, res));

// Get all posts
router.get("/get", (req, res) => controller.getAllPosts(req, res));

// Get single post by ID
router.get("/:id", (req, res) => controller.getPostById(req, res));

// Delete post by ID
router.delete("/:id", (req, res) => controller.deletePost(req, res));

export default router;
