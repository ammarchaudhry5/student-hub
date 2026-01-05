import { Router } from "express";
import { CommentReplyController } from "../controllers/commentReply.controller.ts";

const router: Router = Router();
const controller = new CommentReplyController();

// Create reply
router.post("/reply", (req, res) => controller.createReply(req, res));

// Get replies by comment ID
router.get("/get/:commentId", (req, res) => controller.getRepliesByComment(req, res));

export default router;
