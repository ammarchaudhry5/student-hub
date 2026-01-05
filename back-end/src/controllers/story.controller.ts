import { Request, Response } from "express";
import { StoryServices } from "../services/story.services.ts";

const storyService = new StoryServices();

export class StoryController {
  async createStory(req: Request, res: Response) {
    try {
      const { userId, username, profilePicture, hasNew, isNote, noteText } = req.body;

      if (!userId || !username || !profilePicture || hasNew === undefined) {
        return res.status(400).json({
          success: false,
          message: "userId, username, profilePicture and hasNew are required",
        });
      }

      const story = await storyService.createStory({
        userId,
        username,
        profilePicture,
        hasNew,
        isNote,
        noteText,
      });

      res.json({ success: true, story });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }

  async getAllStories(req: Request, res: Response) {
    try {
      const stories = await storyService.getAllStories();
      res.json({ success: true, stories });
    } catch (e: any) {
      res.status(400).json({ success: false, message: e.message });
    }
  }
}
