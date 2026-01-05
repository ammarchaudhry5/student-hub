import { Request, Response } from "express";
import { CommentReplyServices } from "../services/commentReply.services.ts";

const replyService = new CommentReplyServices();

export class CommentReplyController {
  async createReply(req: Request, res: Response) {
    try {
      const { commentId, postId, userId, comment, time } = req.body;

      if (!commentId || !postId || !userId || !comment || !time) {
        return res.status(400).json({
          success: false,
          message: "commentId, postId, userId, comment and time are required",
        });
      }

      const reply = await replyService.createReply({
        commentId,
        postId,
        userId,
        comment,
        time,
      });

      res.json({ success: true, reply });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  async getRepliesByComment(req: Request, res: Response) {
    try {
      const { commentId } = req.params;
      const replies = await replyService.getRepliesByComment(Number(commentId));
      res.json({ success: true, replies });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
