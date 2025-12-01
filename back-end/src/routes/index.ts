// src/routes/index.ts
import { Router } from "express";
import userRoutes from "./user.routes";
import postRoutes from "./post.routes";
import commentRoutes from "./comment.routes";
import messageRoutes from "./message.routes";

const router = Router();

// Mount all routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/messages", messageRoutes);

// Health check
router.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});

export default router;