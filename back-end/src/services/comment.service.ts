import prisma from "../lib/prisma";

export class CommentService {
    async createComment(data: {
        postId: number;
        userId: number;
        content: string;
    }) {
        // Create comment
        const comment = await prisma.comment.create({
            data,
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        profilePicture: true
                    }
                }
            }
        });

        // Increment post comment count
        await prisma.post.update({
            where: { id: data.postId },
            data: {
                commentsCount: {
                    increment: 1
                }
            }
        });

        return comment;
    }

    async getCommentsByPostId(postId: number) {
        return await prisma.comment.findMany({
            where: { postId },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        profilePicture: true
                    }
                },
                _count: {
                    select: {
                        replies: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async createReply(data: {
        commentId: number;
        postId: number;
        userId: number;
        content: string;
    }) {
        // Create reply
        const reply = await prisma.commentReply.create({
            data,
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        profilePicture: true
                    }
                }
            }
        });

        // Increment comment reply count
        await prisma.comment.update({
            where: { id: data.commentId },
            data: {
                repliesCount: {
                    increment: 1
                }
            }
        });

        return reply;
    }

    async getRepliesByCommentId(commentId: number) {
        return await prisma.commentReply.findMany({
            where: { commentId },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        profilePicture: true
                    }
                }
            },
            orderBy: { createdAt: 'asc' }
        });
    }

    async deleteComment(id: number) {
        // Get comment to decrement post count
        const comment = await prisma.comment.findUnique({
            where: { id },
            select: { postId: true }
        });

        if (comment) {
            // Decrement post comment count
            await prisma.post.update({
                where: { id: comment.postId },
                data: {
                    commentsCount: {
                        decrement: 1
                    }
                }
            });
        }

        // Delete comment (cascade will delete replies)
        return await prisma.comment.delete({
            where: { id }
        });
    }

    async deleteReply(id: number) {
        // Get reply to decrement comment count
        const reply = await prisma.commentReply.findUnique({
            where: { id },
            select: { commentId: true }
        });

        if (reply) {
            // Decrement comment reply count
            await prisma.comment.update({
                where: { id: reply.commentId },
                data: {
                    repliesCount: {
                        decrement: 1
                    }
                }
            });
        }

        // Delete reply
        return await prisma.commentReply.delete({
            where: { id }
        });
    }

    async incrementCommentLikes(commentId: number) {
        return await prisma.comment.update({
            where: { id: commentId },
            data: {
                likesCount: {
                    increment: 1
                }
            }
        });
    }

    async decrementCommentLikes(commentId: number) {
        return await prisma.comment.update({
            where: { id: commentId },
            data: {
                likesCount: {
                    decrement: 1
                }
            }
        });
    }

    async incrementReplyLikes(replyId: number) {
        return await prisma.commentReply.update({
            where: { id: replyId },
            data: {
                likesCount: {
                    increment: 1
                }
            }
        });
    }

    async decrementReplyLikes(replyId: number) {
        return await prisma.commentReply.update({
            where: { id: replyId },
            data: {
                likesCount: {
                    decrement: 1
                }
            }
        });
    }
}

export const commentService = new CommentService();