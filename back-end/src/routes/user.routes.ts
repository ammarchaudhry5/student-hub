// src/routes/user.routes.ts
import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

// Get user profile
router.get("/:id", userController.getProfile);

// Update user profile
router.put("/:id", userController.updateProfile);

// Get user's posts
router.get("/:id/posts", userController.getUserPosts);

// Get user's followers
router.get("/:id/followers", userController.getFollowers);

// Get user's following
router.get("/:id/following", userController.getFollowing);

export default router;