import React, { useState } from "react";
import { Modal } from "@/components/Modal";
import { PostDetailModal } from "@/components/PostDetailModal";
import { Comment } from "@/helpers/types";

interface PostCommentModalProps {
    isOpen: boolean;
    onClose: () => void;
    comments: Comment[];
}

export function PostCommentModal({ isOpen, onClose, comments }: PostCommentModalProps) {
    const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false);
    const [openReplies, setOpenReplies] = useState<{ [key: number]: boolean }>({});
    const [commentLikes, setCommentLikes] = useState<{ [key: number]: boolean }>({});
    const [replyLikes, setReplyLikes] = useState<{ [key: number]: boolean }>({});
    const toggleReplies = (commentId: number) => {
        setOpenReplies((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };
    const toggleCommentLike = (commentId: number) => {
        setCommentLikes((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };
    const toggleReplyLike = (replyId: number) => {
        setReplyLikes((prev) => ({
            ...prev,
            [replyId]: !prev[replyId],
        }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <div className="p-4">

                <h2 className="text-lg font-semibold mb-4">Comments</h2>

                <div className="max-h-[450px] overflow-y-scroll pr-3">

                    {comments.map((comment) => {
                        const isRepliesOpen = openReplies[comment.id] || false;

                        return (
                            <div key={comment.id} className="mb-6">

                                <div className="flex items-start gap-3">
                                    <img
                                        src={comment.userProfilePicture}
                                        className="w-10 h-10 rounded-full border border-blue-500 object-cover"
                                    />

                                    <div className="flex-1">
                                        <p className="text-sm">
                                            <span className="font-semibold">{comment.username}</span>{" "}
                                            {comment.comment}
                                        </p>

                                        <div className="flex gap-3 text-xs text-gray-600 mt-1">
                                            <span>{comment.time}</span>
                                            <span
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    console.log(`comment likes count: ${comment.likesCount}`)
                                                }}
                                            >
                                                {comment.likesCount} likes
                                            </span>
                                            <span className="cursor-pointer">Reply</span>
                                        </div>

                                        {comment.commentReplies.length > 0 && (
                                            <p
                                                className="text-xs text-gray-500 mt-2 cursor-pointer"
                                                onClick={() => {
                                                    toggleReplies(comment.id)
                                                    console.log(`comment id: ${comment.id}`)
                                                }}
                                            >
                                                {isRepliesOpen
                                                    ? "— hide replies"
                                                    : `— view all ${comment.commentReplies.length} replies`}
                                            </p>
                                        )}
                                    </div>

                                    <img
                                        src={
                                            commentLikes[comment.id]
                                                ? "/like-filled.svg"
                                                : "/like-outlined.svg"
                                        }
                                        onClick={() => {
                                            toggleCommentLike(comment.id)
                                            console.log(`comment like id: ${comment.id}`)
                                        }}
                                        className="w-5 h-5 cursor-pointer"
                                    />

                                    <img
                                        src="/three-dots-horizontal-black-icon.svg"
                                        className="h-8 w-8 p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                                        onClick={() => setIsPostDetailModalOpen(true)}
                                    />
                                </div>

                                {isRepliesOpen && (
                                    <div className="mt-3 ml-12">
                                        {comment.commentReplies.map((reply) => (
                                            <div key={reply.id} className="flex items-start gap-3 mt-3">
                                                <img
                                                    src={reply.userProfilePicture}
                                                    className="w-8 h-8 rounded-full border border-blue-500 object-cover"
                                                />

                                                <div>
                                                    <p className="text-sm">
                                                        <span className="font-semibold">{reply.username}</span>{" "}
                                                        {reply.comment}
                                                    </p>

                                                    <div className="flex gap-3 text-xs text-gray-600 mt-1">
                                                        <span>{reply.time}</span>
                                                        <span
                                                            className="cursor-pointer"
                                                            onClick={() => {
                                                                console.log(`comment reply likes count: ${reply.likesCount}`)
                                                            }}
                                                        >
                                                            {reply.likesCount} likes
                                                        </span>
                                                        <span className="cursor-pointer">Reply</span>
                                                    </div>
                                                </div>

                                                <img
                                                    src={
                                                        replyLikes[reply.id]
                                                            ? "/like-filled.svg"
                                                            : "/like-outlined.svg"
                                                    }
                                                    onClick={() => {
                                                        toggleReplyLike(reply.id)
                                                        console.log(`comment reply like id: ${reply.id}`)
                                                    }}
                                                    className="w-5 h-5 cursor-pointer"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}

                </div>

                <PostDetailModal
                    isOpen={isPostDetailModalOpen}
                    onClose={() => setIsPostDetailModalOpen(false)}
                />
            </div>
        </Modal>
    );
}