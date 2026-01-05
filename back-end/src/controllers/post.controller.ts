import { Request, Response } from "express";
import { PostServices } from "../services/post.services.ts";

const postService = new PostServices();

export class PostController {
  // Create a new post
  async createPost(req: Request, res: Response) {
    try {
      const { userId, postedTime, posterImage, description } = req.body;

      if (!userId || !postedTime) {
        return res.status(400).json({
          success: false,
          message: "userId and postedTime are required",
        });
      }

      const post = await postService.createPost({
        userId,
        postedTime,
        posterImage,
        description,
      });

      res.json({ success: true, post });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  // Get all posts
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await postService.getAllPosts();
      res.json({ success: true, posts });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  // Get single post by Post ID
  async getPostById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const post = await postService.getPostById(Number(id));
      res.json({ success: true, post });
    } catch (e: any) {
      res.status(404).json({ success: false, message: e.message });
    }
  }

  // Delete post
  async deletePost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await postService.deletePost(Number(id));
      res.json({ success: true, message: "Post deleted successfully" });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
