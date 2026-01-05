import { Request, Response } from "express";
import { CommentServices } from "../services/comment.services.ts";

const commentService = new CommentServices();

export class CommentController {
  // Create comment
  async createComment(req: Request, res: Response) {
    try {
      const { postId, userId, comment, time } = req.body;

      if (!postId || !userId || !comment || !time) {
        return res.status(400).json({
          success: false,
          message: "postId, userId, comment and time are required",
        });
      }

      const newComment = await commentService.createComment({
        postId,
        userId,
        comment,
        time,
      });

      res.json({ success: true, comment: newComment });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  // Get comments by post
  async getCommentsByPost(req: Request, res: Response) {
    try {
      const { postId } = req.params;
      const comments = await commentService.getCommentsByPost(Number(postId));
      res.json({ success: true, comments });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
