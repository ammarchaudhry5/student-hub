// src/routes/comment.routes.ts
import { Router } from "express";
import { commentController } from "../controllers/comment.controller";

const router = Router();

// Create new comment on a post
router.post("/", commentController.createComment);

// Get all comments for a specific post
router.get("/post/:postId", commentController.getPostComments);

// Create reply to a comment
router.post("/reply", commentController.createReply);

// Get all replies for a specific comment
router.get("/:commentId/replies", commentController.getCommentReplies);

// Delete comment
router.delete("/:id", commentController.deleteComment);

// Like a comment
router.post("/:id/like", commentController.likeComment);

// Like a reply
router.post("/reply/:id/like", commentController.likeReply);

export default router;