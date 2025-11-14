import React, { useState } from "react";
import { Modal } from "@/components/Modal";
import {Divider} from "@/components/Divider";
import {PostDetailModal} from "@/components/PostDetailModal";
import {PostCommentModal} from "@/components/PostCommentModal";

interface FeedCardProps {
    userImage: string;
    userName: string;
    postedTime: string;
    poster: string;
    // isLiked: boolean;
    // isSaved: boolean;
    likesCount: number;
    commentsCount: number;
    description: string;
    // commentsCount: number;
    // onUserNameImageClick: ()=>void;
    // onPostDoubleClick: ()=>void;
    // onLikeClick: ()=>void;
    // onCommentClick: ()=>void;
    // onSaveClick: ()=>void;
    // onShareClick: ()=>void;

    //---------postCommentModal
    commentUserProfilePicture: string;
    commentUsername: string;
    comment: string;
    commentTime: string;
    commentLikesCounts: number;
    commentRepliesCount: number;
}

export function FeedCard({
                             userImage,
                             userName,
                             postedTime,
                             poster,
                             // isLiked,
                             // isSaved,
                             likesCount,
                             commentsCount,
                             description,
                             // commentsCount,
                             // onUserNameImageClick,
                             // onPostDoubleClick,
                             // onLikeClick,
                             // onCommentClick,
                             // onSaveClick,
                             // onShareClick,
                             //---------postCommentModal
                             commentUserProfilePicture,
                             commentUsername,
                             comment,
                             commentTime,
                             commentLikesCounts,
                             commentRepliesCount,
}: FeedCardProps) {

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
        <div>
            <div className="flex justify-between items-center ml-3 mr-2">
                <div className="flex items-center">
                    <div className="relative w-12 h-12">
                        <div
                            onClick={() => console.log("user profile img clicked")}
                            className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={userImage}
                                alt="profile image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <p
                        className="ml-4 mr-2 text-white text-lg font-semibold leading-tight cursor-pointer"
                        onClick={() => console.log("username clicked")}
                    >
                        {userName}
                    </p>

                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

                    <p className="text-gray-300 text-base font-normal ml-2 leading-tight">
                        {postedTime}
                    </p>
                </div>

                <div>
                    <img
                        src="/three-dots-horizontal-icon.svg"
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
                    src={poster}
                    alt="feed picture"
                    className="object-cover rounded-md border-1 border-gray-400 my-3"
                    onDoubleClick={() => console.log("post double clicked")}
                />
            </div>

            <div className="flex justify-between mx-4">
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

            <div className="flex my-1 mx-4">
                <p className="text-base font-semibold text-white">{likesCount} likes</p>
            </div>

            <div className="flex my-1 mx-4">
                <p className="text-base font-semibold text-white">{userName}</p>
                <p className="text-base font-medium text-white ml-2">{description}</p>
            </div>

            <div className="flex my-1 mx-4">
                <p className="text-sm font-normal text-gray-300">
                    View all {commentsCount} comments
                </p>
            </div>

            <div className="flex my-1 mx-4">
                <p className="text-sm font-normal text-gray-300">
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
            <PostCommentModal
                userProfilePicture={commentUserProfilePicture}
                userName={commentUsername}
                comment={comment}
                commentTime={commentTime}
                commentLikesCounts={commentLikesCounts}
                commentRepliesCount={commentRepliesCount}
            ></PostCommentModal>
            {/*<Modal isOpen={isPostDetailModalOpen} onClose={() => setIsPostDetailModalOpen(false)}>*/}
            {/*    <div className="flex flex-col ">*/}
            {/*        <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">*/}
            {/*            Edit Post*/}
            {/*        </button>*/}
            {/*        <Divider></Divider>*/}
            {/*        <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">*/}
            {/*            Delete Post*/}
            {/*        </button>*/}
            {/*        <Divider></Divider>*/}
            {/*        <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">*/}
            {/*            Copy Link*/}
            {/*        </button>*/}
            {/*        <Divider></Divider>*/}
            {/*        <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">*/}
            {/*            Add to Favourites*/}
            {/*        </button>*/}
            {/*        <Divider></Divider>*/}
            {/*        <button className="w-full text-center hover:bg-gray-100 p-2 rounded-xl">*/}
            {/*            Cancel*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</Modal>*/}
        </div>
    );
}