// src/services/user.service.ts
import prisma from "../lib/prisma";

export class UserService {
    async getUserById(id: number) {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                username: true,
                name: true,
                profilePicture: true,
                bio: true,
                links: true,
                createdAt: true,
                _count: {
                    select: {
                        posts: true,
                        followers: true,
                        following: true
                    }
                }
            }
        });
    }

    async getUserByUsername(username: string) {
        return await prisma.user.findUnique({
            where: { username },
            include: {
                _count: {
                    select: {
                        posts: true,
                        followers: true,
                        following: true
                    }
                }
            }
        });
    }

    async createUser(data: {
        email: string;
        username: string;
        name?: string;
        profilePicture?: string;
    }) {
        return await prisma.user.create({
            data
        });
    }

    async updateUser(id: number, data: {
        name?: string;
        profilePicture?: string;
        bio?: string;
        links?: string[];
    }) {
        return await prisma.user.update({
            where: { id },
            data
        });
    }

    async getUserPosts(userId: number, page = 1, limit = 10) {
        const skip = (page - 1) * limit;

        return await prisma.post.findMany({
            where: { userId },
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

    async getFollowers(userId: number) {
        return await prisma.follow.findMany({
            where: { followingId: userId },
            include: {
                follower: {
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

    async getFollowing(userId: number) {
        return await prisma.follow.findMany({
            where: { followerId: userId },
            include: {
                following: {
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

    async followUser(followerId: number, followingId: number) {
        return await prisma.follow.create({
            data: {
                followerId,
                followingId
            }
        });
    }

    async unfollowUser(followerId: number, followingId: number) {
        return await prisma.follow.deleteMany({
            where: {
                followerId,
                followingId
            }
        });
    }
}

export const userService = new UserService();