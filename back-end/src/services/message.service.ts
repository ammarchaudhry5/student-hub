// src/services/message.service.ts
import prisma from "../lib/prisma";

// Define MessageType enum locally if Prisma hasn't generated it yet
enum MessageType {
    text = "text",
    image = "image",
    story_reply = "story_reply",
    reaction = "reaction"
}

export class MessageService {
    async createConversation(participantIds: number[]) {
        return await prisma.conversation.create({
            data: {
                participants: {
                    create: participantIds.map(userId => ({
                        userId
                    }))
                }
            },
            include: {
                participants: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                profilePicture: true
                            }
                        }
                    }
                }
            }
        });
    }

    async getUserConversations(userId: number) {
        return await prisma.conversation.findMany({
            where: {
                participants: {
                    some: {
                        userId
                    }
                }
            },
            include: {
                participants: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                username: true,
                                profilePicture: true
                            }
                        }
                    }
                },
                messages: {
                    orderBy: { createdAt: 'desc' },
                    take: 1
                }
            },
            orderBy: { updatedAt: 'desc' }
        });
    }

    async getConversationMessages(conversationId: number) {
        return await prisma.message.findMany({
            where: { conversationId },
            include: {
                sender: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true
                    }
                }
            },
            orderBy: { createdAt: 'asc' }
        });
    }

    async sendMessage(data: {
        conversationId: number;
        senderId: number;
        content?: string;
        type?: string;
        imageUrl?: string;
        storyReply?: string;
    }) {
        const message = await prisma.message.create({
            data: {
                conversationId: data.conversationId,
                senderId: data.senderId,
                content: data.content,
                type: (data.type as any) || MessageType.text,
                imageUrl: data.imageUrl,
                storyReply: data.storyReply
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true
                    }
                }
            }
        });

        // Update conversation timestamp
        await prisma.conversation.update({
            where: { id: data.conversationId },
            data: { updatedAt: new Date() }
        });

        // Increment unread count for other participants
        await prisma.conversationParticipant.updateMany({
            where: {
                conversationId: data.conversationId,
                userId: { not: data.senderId }
            },
            data: {
                unreadCount: {
                    increment: 1
                }
            }
        });

        return message;
    }

    async markMessageAsRead(messageId: number) {
        return await prisma.message.update({
            where: { id: messageId },
            data: { isRead: true }
        });
    }

    async resetUnreadCount(conversationId: number, userId: number) {
        return await prisma.conversationParticipant.updateMany({
            where: {
                conversationId,
                userId
            },
            data: {
                unreadCount: 0
            }
        });
    }
}

export const messageService = new MessageService();