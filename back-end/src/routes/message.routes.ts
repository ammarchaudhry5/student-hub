// src/routes/message.routes.ts
import { Router } from "express";
import { messageController } from "../controllers/message.controller";

const router = Router();

// Get user conversations
router.get("/conversations/:userId", messageController.getConversations);

// Create conversation
router.post("/conversations", messageController.createConversation);

// Get messages in conversation
router.get("/conversations/:conversationId/messages", messageController.getMessages);

// Send message
router.post("/", messageController.sendMessage);

// Mark message as read
router.put("/:id/read", messageController.markAsRead);

export default router;