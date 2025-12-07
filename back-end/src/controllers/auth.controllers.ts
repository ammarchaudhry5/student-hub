import { Request, Response } from "express";
import { AuthServices } from "../services/auth.services.ts";

const authService = new AuthServices();

export class AuthControllers {
  // Register a new user
  async register(req: Request, res: Response) {
    try {
      const { email, password, username, name, profilePicture, bio, links } = req.body;

      if (!email || !password || !username || !name) {
        return res.status(400).json({
          success: false,
          message: "Email, password, username, and name are required",
        });
      }

      const newUser = await authService.register({
        email,
        password,
        username,
        name,
        profilePicture,
        bio,
        links,
      });

      res.json({ success: true, user: newUser });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  // Login user
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      const result = await authService.login(email, password);
      res.json({ success: true, ...result });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
