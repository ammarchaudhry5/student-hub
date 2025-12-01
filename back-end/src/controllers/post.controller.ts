// src/controllers/post.controller.ts
import { Request, Response } from "express";
import { postService } from "../services/post.service";

export class PostController {
    async createPost(req: Request, res: Response) {
        try {
            const { userId, title, description, posterImage } = req.body;

            const post = await postService.createPost({
                userId,
                title,
                description,
                posterImage
            });

            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ message: "Error creating post", error });
        }
    }

    async getPost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            const post = await postService.getPostById(postId);

            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }

            res.json(post);
        } catch (error) {
            res.status(500).json({ message: "Error fetching post", error });
        }
    }

    async updatePost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            const updateData = req.body;

            const updatedPost = await postService.updatePost(postId, updateData);
            res.json(updatedPost);
        } catch (error) {
            res.status(500).json({ message: "Error updating post", error });
        }
    }

    async deletePost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            await postService.deletePost(postId);
            res.json({ message: "Post deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error deleting post", error });
        }
    }

    async getFeed(req: Request, res: Response) {
        try {
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 10;

            const posts = await postService.getFeed(page, limit);
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: "Error fetching feed", error });
        }
    }

    async likePost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            const result = await postService.incrementLikes(postId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error liking post", error });
        }
    }

    async savePost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            const { userId } = req.body;

            const result = await postService.savePost(userId, postId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error saving post", error });
        }
    }

    async unsavePost(req: Request, res: Response) {
        try {
            const postId = parseInt(req.params.id);
            const { userId } = req.body;

            await postService.unsavePost(userId, postId);
            res.json({ message: "Post unsaved successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error unsaving post", error });
        }
    }

    async getSavedPosts(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.userId);
            const savedPosts = await postService.getSavedPosts(userId);
            res.json(savedPosts);
        } catch (error) {
            res.status(500).json({ message: "Error fetching saved posts", error });
        }
    }
}

export const postController = new PostController();