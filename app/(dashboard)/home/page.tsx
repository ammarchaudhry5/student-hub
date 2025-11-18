"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ActiveMember } from "@/components/ActiveMember";
import { PostCard } from "@/components/PostCard";
import {User, Post, Comment, CommentReplies} from "@/helpers/types";
import {SuggestedUserTile} from "@/components/SuggestedUserTile";

export default function FeedPage() {
    const router = useRouter();

    const IMAGES = [
        "/images/user-3.jpg",
        "/images/user-2.jpg",
        "/images/user-3.jpg",
        "/images/user-2.jpg",
        "/images/user-3.jpg",
        "/images/user-2.jpg",
        "/images/user-3.jpg",
        "/images/user-3.jpg",
        "/images/user-2.jpg",
        "/images/user-3.jpg",
    ];

    const user: User = {
        id: 1,
        email: "ammar@example.com",
        username: "ammar_ch",
        name: "Ammar",
        profilePicture: "/images/user-1.jpg",
        bio: "Passionate developer and student.",
        links: [
            "https://github.com/ammarchaudhry5",
            "https://linkedin.com/in/ammar-chaudhry1"
        ],
        followers: [
            {
                id: 2,
                email: "john@example.com",
                username: "john_doe",
                name: "John Doe",
                profilePicture: "/images/user-2.jpg",
                bio: "Tech enthusiast.",
                links: [],
                followers: [],
                followersCount: 4,
                followings: [],
                followingsCount: 3,
                posts: [],
                postsCount: 1,
                savedPosts: []
            }
        ],
        followersCount: 7,
        followings: [
            {
                id: 3,
                email: "sara@example.com",
                username: "sara_123",
                name: "Sara",
                profilePicture: "/images/user-3.jpg",
                bio: "Designer.",
                links: [],
                followers: [],
                followersCount: 6,
                followings: [],
                followingsCount: 9,
                posts: [],
                postsCount: 2,
                savedPosts: []
            }
        ],
        followingsCount: 5,
        posts: [],
        postsCount: 1,
        savedPosts: []
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
            posterImage: "/images/user-3.jpg",
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
            posterImage: "/images/user-3.jpg",
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
            posterImage: "/images/user-3.jpg",
            likesCount: 45,
            commentsCount: 10,
            description: "This is my new post 3!",
            comments: comment,
        }];




    return (
        <div className="grid grid-cols-3 h-screen w-full">
            <div className="col-span-2 border-x-2 border-gray-300 bg-white">
                <header className="flex px-6 my-3 gap-x-[4] overflow-x-scroll">
                    {IMAGES.map((image, index) => (
                        <ActiveMember
                            key={index}
                            userImage={image}
                            isActive={index % 2 === 0}
                            onClick={() => console.log("Clicked user:", index)}
                        />
                    ))}
                </header>

                <main className="flex-1 px-25">
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
            <div className="col-span-1 p-6 flex flex-col  my-5 items-center bg-white">
                <SuggestedUserTile
                    // key={}
                    user={user}
                >
                </SuggestedUserTile>
            </div>
        </div>
    );
}