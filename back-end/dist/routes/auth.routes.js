import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers.ts";
const router = Router();
const controller = new AuthControllers();
router.post("/register", (req, res) => controller.register(req, res));
router.post("/login", (req, res) => controller.login(req, res));
export default router;
