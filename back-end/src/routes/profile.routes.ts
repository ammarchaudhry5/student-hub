import { Router } from "express";
import { ProfileController } from "../controllers/profile.controllers.ts";

const router: Router = Router();

const controller = new ProfileController();

// Get logged in user profile
router.get("/me", (req, res) => controller.getMyProfile(req, res));

// Get any profile by username
router.get("/:username", (req, res) => controller.getProfileByUsername(req, res));

// Update logged in user profile
router.put("/update", (req, res) => controller.updateProfile(req, res));

export default router;
