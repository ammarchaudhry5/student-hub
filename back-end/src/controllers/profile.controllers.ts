import { Request, Response } from "express";
import { ProfileServices } from "../services/profile.services.ts";

const profileService = new ProfileServices();

export class ProfileController {
  // Get logged-in user's profile
  async getMyProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const profile = await profileService.getProfileById(userId);

      res.json({ success: true, profile });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  // Get profile by username (public profile)
  async getProfileByUsername(req: Request, res: Response) {
    try {
      const { username } = req.params;

      if (!username) {
        return res.status(400).json({
          success: false,
          message: "Username is required",
        });
      }

      const profile = await profileService.getProfileByUsername(username);

      res.json({ success: true, profile });
    } catch (e: any) {
      res.status(404).json({ success: false, message: e.message });
    }
  }

  // Update logged-in user's profile
  async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;
      const { name, bio, profilePicture, links } = req.body;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const updatedProfile = await profileService.updateProfile(userId, {
        name,
        bio,
        profilePicture,
        links,
      });

      res.json({ success: true, profile: updatedProfile });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
