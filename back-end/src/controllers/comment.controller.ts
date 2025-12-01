// src/controllers/comment.controller.ts
import { Request, Response } from "express";
import { commentService } from "../services/comment.service";

export class CommentController {
    async createComment(req: Request, res: Response) {
        try {
            const { postId, userId, content } = req.body;

            if (!postId || !userId || !content) {
                return res.status(400).json({
                    message: "Missing required fields: postId, userId, content"
                });
            }

            const comment = await commentService.createComment({
                postId,
                userId,
                content
            });

            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: "Error creating comment", error });
        }
    }

    async getPostComments(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.postId);

            if (isNaN(postId)) {
                return res.status(400).json({ message: "Invalid post ID" });
            }

            const comments = await commentService.getCommentsByPostId(postId);
            res.json(comments);
        } catch (error) {
            res.status(500).json({ message: "Error fetching comments", error });
        }
    }

    async createReply(req: Request, res: Response) {
        try {
            const { commentId, postId, userId, content } = req.body;

            if (!commentId || !postId || !userId || !content) {
                return res.status(400).json({
                    message: "Missing required fields: commentId, postId, userId, content"
                });
            }

            const reply = await commentService.createReply({
                commentId,
                postId,
                userId,
                content
            });

            res.status(201).json(reply);
        } catch (error) {
            res.status(500).json({ message: "Error creating reply", error });
        }
    }

    async getCommentReplies(req: Request, res: Response) {
        try {
            const commentId = parseInt(req.params.commentId);

            if (isNaN(commentId)) {
                return res.status(400).json({ message: "Invalid comment ID" });
            }

            const replies = await commentService.getRepliesByCommentId(commentId);
            res.json(replies);
        } catch (error) {
            res.status(500).json({ message: "Error fetching replies", error });
        }
    }

    async deleteComment(req: Request, res: Response) {
        try {
            const commentId = parseInt(req.params.id);

            if (isNaN(commentId)) {
                return res.status(400).json({ message: "Invalid comment ID" });
            }

            await commentService.deleteComment(commentId);
            res.json({ message: "Comment deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting comment", error });
        }
    }

    async likeComment(req: Request, res: Response) {
        try {
            const commentId = parseInt(req.params.id);

            if (isNaN(commentId)) {
                return res.status(400).json({ message: "Invalid comment ID" });
            }

            const result = await commentService.incrementCommentLikes(commentId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error liking comment", error });
        }
    }

    async likeReply(req: Request, res: Response) {
        try {
            const replyId = parseInt(req.params.id);

            if (isNaN(replyId)) {
                return res.status(400).json({ message: "Invalid reply ID" });
            }

            const result = await commentService.incrementReplyLikes(replyId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error liking reply", error });
        }
    }
}

export const commentController = new CommentController();