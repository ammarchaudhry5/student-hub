import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controllers.ts";

const router: Router = Router();

const controller = new AuthControllers();

//register a user
router.post("/register", (req, res) => controller.register(req, res));

//login a user
router.post("/login", (req, res) => controller.login(req, res));

export default router;
