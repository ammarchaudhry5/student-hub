// src/services/post.service.ts
import prisma from "../lib/prisma";

export class PostService {
    async createPost(data: {
        userId: number;
        title?: string;
        description?: string;
        posterImage?: string;
    }) {
        return await prisma.post.create({
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
    }

    async getPostById(id: number) {
        return await prisma.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        name: true,
                        profilePicture: true
                    }
                },
                comments: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                profilePicture: true
                            }
                        },
                        _count: {
                            select: {
                                replies: true
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 3
                },
                _count: {
                    select: {
                        comments: true,
                        savedBy: true
                    }
                }
            }
        });
    }

    async updatePost(id: number, data: {
        title?: string;
        description?: string;
        posterImage?: string;
    }) {
        return await prisma.post.update({
            where: { id },
            data
        });
    }

    async deletePost(id: number) {
        return await prisma.post.delete({
            where: { id }
        });
    }

    async getFeed(page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        return await prisma.post.findMany({
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
                        comments: true,
                        savedBy: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit
        });
    }

    async incrementLikes(postId: number) {
        return await prisma.post.update({
            where: { id: postId },
            data: {
                likesCount: {
                    increment: 1
                }
            }
        });
    }

    async decrementLikes(postId: number) {
        return await prisma.post.update({
            where: { id: postId },
            data: {
                likesCount: {
                    decrement: 1
                }
            }
        });
    }

    async savePost(userId: number, postId: number) {
        return await prisma.savedPost.create({
            data: {
                userId,
                postId
            }
        });
    }

    async unsavePost(userId: number, postId: number) {
        return await prisma.savedPost.deleteMany({
            where: {
                userId,
                postId
            }
        });
    }

    async getSavedPosts(userId: number) {
        return await prisma.savedPost.findMany({
            where: { userId },
            include: {
                post: {
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
                                comments: true,
                                savedBy: true
                            }
                        }
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
}

export const postService = new PostService();