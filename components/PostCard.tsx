import React, { useState } from "react";
import {PostDetailModal} from "@/components/PostDetailModal";
import {PostCommentModal} from "@/components/PostCommentModal";
import {Post, User, Comment} from "@/helpers/types";

interface PostCardProps {
    key: number;
    user: User
    post:Post
    comment: Comment
}

export function PostCard({
                             post,
                             user,
                             comment,
                         }: PostCardProps)
{

    const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const [isPostCommentModalOpen, setIsPostCommentModalOpen] = useState(false);
    const [saved, setSaved] = useState(false);

    const toggleLike = () => {
        setLiked(changed => !changed);
        console.log("Like toggled:", !liked);
    };

    const toggleSave = () => {
        setSaved(changed => !changed);
        console.log("Save toggled:", !saved);
    };

    return (
        <div className="py-5">
            <div className="flex flex-col py-5 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-t-3xl rounded-b-md ">
                <div className="flex justify-between items-center mx-7">
                    <div className="flex items-center">
                        <div className="relative w-12 h-12">
                            <div
                                onClick={() => console.log("user profile img clicked")}
                                className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src={user.profilePicture}
                                    alt="profile image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <p
                            className="ml-4 mr-2 text-black text-lg font-semibold leading-tight cursor-pointer"
                            onClick={() => console.log("username clicked")}
                        >
                            {user.name}
                        </p>

                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>

                        <p className="text-gray-600 text-sm  font-normal ml-2 leading-tight">
                            {post.postedTime}
                        </p>
                    </div>

                    <div>
                        <img
                            src="/three-dots-horizontal-black-icon.svg"
                            alt="post details icon"
                            onClick={() => {
                                console.log("open post details modal");
                                setIsPostDetailModalOpen(true)
                            }}
                            className="rounded-full h-8 w-8 p-1 hover:bg-gray-300 cursor-pointer"
                        />
                    </div>
                </div>

                <div>
                    <img
                        src={post.posterImage}
                        alt="feed picture"
                        className="object-cover border-1 border-gray-400 my-3"
                        onDoubleClick={() => console.log("post double clicked")}
                    />
                </div>

                <div className="flex justify-between mx-7">
                    <div className="flex gap-5">
                        <img
                            src={liked ? "/like-filled.svg" : "/like-outlined.svg"}
                            alt="like icon"
                            onClick={toggleLike}
                            className="h-8 w-8 cursor-pointer"
                        />

                        <img
                            src="/comment-outlined.svg"
                            alt="comment icon"
                            onClick={() => {
                                console.log("post comment button clicked")
                                setIsPostCommentModalOpen(true)
                            }}
                            className="h-7 w-7 cursor-pointer"
                        />

                        <img
                            src="/share-outlined.svg"
                            alt="share icon"
                            onClick={() => console.log("post share button clicked")}
                            className="h-7 w-7 cursor-pointer"
                        />
                    </div>

                    <div className="flex gap-5">
                        <img
                            src={saved ? "/save-filled.svg" : "/save-outlined.svg"}
                            alt="save icon"
                            onClick= {toggleSave}
                            className="h-7 w-7 cursor-pointer"
                        />
                    </div>
                </div>

                <div className="flex my-1 mx-7">
                    <p className="text-base font-semibold text-black">{post.likesCount} likes</p>
                </div>

                <div className="flex my-1 mx-7">
                    <p className="text-base font-semibold text-black">{post.username}</p>
                    <p className="text-base font-medium text-black ml-2">{post.description}</p>
                </div>

                <div
                    className="flex my-1 mx-7 cursor-pointer"
                    onClick={() => {
                        console.log("post comment button clicked")
                        setIsPostCommentModalOpen(true)
                    }}
                >
                    <p className="text-sm font-normal text-gray-600">
                        View all {post.commentsCount} comments
                    </p>
                </div>

                <div className="flex my-1 mx-7">
                    <p
                        className="text-sm font-normal text-gray-600 cursor-pointer"
                        onClick={() => {
                            console.log("post comment button clicked")
                            setIsPostCommentModalOpen(true)
                        }}
                    >
                        Add a comment...
                    </p>
                </div>
                <PostDetailModal
                    isOpen={isPostDetailModalOpen}
                    onClose={() => {
                        console.log("close post details modal");
                        setIsPostDetailModalOpen(false)
                    }}
                ></PostDetailModal>
                {post.comments.map((comment, index) => (
                    <PostCommentModal
                        key={index}
                        isOpen={isPostCommentModalOpen}
                        onClose={() => {
                            console.log("close post comment modal");
                            setIsPostCommentModalOpen(false)
                        }}
                        comments={post.comments}
                    >
                    </PostCommentModal>
                ))}
            </div>
        </div>
    );
}