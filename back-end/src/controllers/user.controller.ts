// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { userService } from "../services/user.service";

export class UserController {
    async getProfile(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const user = await userService.getUserById(userId);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ message: "Error fetching user", error });
        }
    }

    async updateProfile(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const updateData = req.body;

            const updatedUser = await userService.updateUser(userId, updateData);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: "Error updating user", error });
        }
    }

    async getUserPosts(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const posts = await userService.getUserPosts(userId);
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: "Error fetching posts", error });
        }
    }

    async getFollowers(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const followers = await userService.getFollowers(userId);
            res.json(followers);
        } catch (error) {
            res.status(500).json({ message: "Error fetching followers", error });
        }
    }

    async getFollowing(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            const following = await userService.getFollowing(userId);
            res.json(following);
        } catch (error) {
            res.status(500).json({ message: "Error fetching following", error });
        }
    }
}

export const userController = new UserController();