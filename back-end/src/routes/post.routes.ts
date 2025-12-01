// src/routes/post.routes.ts
import { Router } from "express";
import { postController } from "../controllers/post.controller";

const router = Router();

// Get feed (pagination supported via query params: ?page=1&limit=10)
router.get("/feed", postController.getFeed);

// Create new post
router.post("/", postController.createPost);

// Get single post by ID
router.get("/:id", postController.getPost);

// Update post
router.put("/:id", postController.updatePost);

// Delete post
router.delete("/:id", postController.deletePost);

// Like post
router.post("/:id/like", postController.likePost);

// Save post
router.post("/:id/save", postController.savePost);

// Unsave post
router.delete("/:id/save", postController.unsavePost);

// Get saved posts for a user
router.get("/saved/:userId", postController.getSavedPosts);

export default router;