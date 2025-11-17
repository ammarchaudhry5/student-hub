"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ActiveMember } from "@/components/ActiveMember";
import { PostCard } from "@/components/PostCard";
import {User, Post, Comment, CommentReplies} from "@/helpers/types";

export default function FeedPage() {
    const router = useRouter();

    const IMAGES = [
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
    ];

    const user: User = {
        id: 1,
        name: "Ammar",
        profilePicture: "/images/user-1.jpg",
    };

    const commentReplies: CommentReplies[] = [
        {
            id: 1,
            postId: 1,
            userId: 1,
            commentId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "first comment reply",
            time: "3h",
            likesCount: 8,
        },
        {
            id: 2,
            postId: 1,
            userId: 1,
            commentId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "second comment reply",
            time: "3h",
            likesCount: 8,
        },
        {
            id: 3,
            postId: 1,
            userId: 1,
            commentId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "third comment reply",
            time: "3h",
            likesCount: 8,
        }
    ];

    const comment: Comment[] = [
        {
            id: 1,
            postId: 1,
            userId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "first comment",
            commentReplies: commentReplies,
            time: "3h",
            likesCount: 8,
            repliesCount: 12,
        },
        {
            id: 2,
            postId: 1,
            userId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "second comment",
            commentReplies: commentReplies,
            time: "3h",
            likesCount: 8,
            repliesCount: 12,
        },
        {
            id: 3,
            postId: 1,
            userId: 1,
            userProfilePicture: user.profilePicture,
            username: user.name,
            comment: "third comment",
            commentReplies: commentReplies,
            time: "3h",
            likesCount: 8,
            repliesCount: 12,
        },
    ];

    const posts: Post[] = [
        {
        id: 1,
        userId: user.id,
        username: user.name,
        userProfilePicture: user.profilePicture,
        postedTime: "2h",
        posterImage: "/images/pic-1.jpg",
        likesCount: 45,
        commentsCount: 10,
        description: "This is my new post 1!",
        comments: comment,
    },
        {
        id: 2,
        userId: user.id,
        username: user.name,
        userProfilePicture: user.profilePicture,
        postedTime: "2h",
        posterImage: "/images/pic-1.jpg",
        likesCount: 45,
        commentsCount: 10,
        description: "This is my new post 2!",
        comments: comment,
    },
        {
        id: 3,
        userId: user.id,
        username: user.name,
        userProfilePicture: user.profilePicture,
        postedTime: "2h",
        posterImage: "/images/pic-1.jpg",
        likesCount: 45,
        commentsCount: 10,
        description: "This is my new post 3!",
        comments: comment,
    }];




    return (
        <div className="w-[70%] min-h-screen bg-black">
            <header className="flex py-3 px-6 gap-x-[4] overflow-x-scroll">
                {IMAGES.map((image, index) => (
                    <ActiveMember
                        key={index}
                        userImage={image}
                        isActive={index % 2 === 0}
                        onClick={() => console.log("Clicked user:", index)}
                    />
                ))}
            </header>

            <main className="flex-1 p-20">
                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        user={user}
                        post={post}
                        comment={comment[index]}
                    />
                ))}

            </main>
        </div>
    );
}