import { Router } from "express";
import { CommentController } from "../controllers/comment.controller.ts";

const router: Router = Router();
const controller = new CommentController();

// Create comment
router.post("/create", (req, res) => controller.createComment(req, res));

// Get comments by post ID
router.get("/get/:postId", (req, res) => controller.getCommentsByPost(req, res));

export default router;
