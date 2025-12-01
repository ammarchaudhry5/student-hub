// src/controllers/message.controller.ts
import { Request, Response } from "express";
import { messageService } from "../services/message.service";

export class MessageController {
    async getConversations(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.userId);
            const conversations = await messageService.getUserConversations(userId);
            res.json(conversations);
        } catch (error) {
            res.status(500).json({ message: "Error fetching conversations", error });
        }
    }

    async getMessages(req: Request, res: Response) {
        try {
            const conversationId = parseInt(req.params.conversationId);
            const messages = await messageService.getConversationMessages(conversationId);
            res.json(messages);
        } catch (error) {
            res.status(500).json({ message: "Error fetching messages", error });
        }
    }

    async sendMessage(req: Request, res: Response) {
        try {
            const { conversationId, senderId, content, type, imageUrl } = req.body;

            const message = await messageService.sendMessage({
                conversationId,
                senderId,
                content,
                type,
                imageUrl
            });

            res.status(201).json(message);
        } catch (error) {
            res.status(500).json({ message: "Error sending message", error });
        }
    }

    async markAsRead(req: Request, res: Response) {
        try {
            const messageId = parseInt(req.params.id);
            const message = await messageService.markMessageAsRead(messageId);
            res.json(message);
        } catch (error) {
            res.status(500).json({ message: "Error marking message as read", error });
        }
    }

    async createConversation(req: Request, res: Response) {
        try {
            const { participantIds } = req.body;
            const conversation = await messageService.createConversation(participantIds);
            res.status(201).json(conversation);
        } catch (error) {
            res.status(500).json({ message: "Error creating conversation", error });
        }
    }
}

export const messageController = new MessageController();