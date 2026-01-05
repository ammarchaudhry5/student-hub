import { Router } from "express";
import { StoryController } from "../controllers/story.controller.ts";

const router: Router = Router();
const controller = new StoryController();

// Create story
router.post("/create", (req, res) => controller.createStory(req, res));

// Get all stories
router.get("/get", (req, res) => controller.getAllStories(req, res));

export default router;
