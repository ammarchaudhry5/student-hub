"use client";

import React, { useState, useRef } from "react";
import { Post, User } from "@/helpers/types";

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User;
    onPostCreated?: (post: Post) => void;
}

export default function CreatePostModal({
                                            isOpen,
                                            onClose,
                                            user,
                                            onPostCreated,
                                        }: CreatePostModalProps) {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [mediaURL, setMediaURL] = useState<string | null>(null);
    const [caption, setCaption] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    if (!isOpen) return null;

    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setMediaURL(reader.result as string);
            setStep(2);
        };
        reader.readAsDataURL(file);
    };

    const handleSharePost = () => {
        setStep(3);

        setTimeout(() => {
            const newPost: Post = {
                id: Date.now(),
                userId: user.id,
                username: user.username,
                userProfilePicture: user.profilePicture,
                postedTime: `${Date.now()}`,
                posterImage: mediaURL || "",
                likesCount: 0,
                commentsCount: 0,
                description: caption,
                comments: [],
            };

            const existing = JSON.parse(localStorage.getItem("posts") || "[]");
            const updated = [newPost, ...existing];
            localStorage.setItem("posts", JSON.stringify(updated));

            onClose();
            onPostCreated?.(newPost);

            setTimeout(() => {
                setStep(1);
                setMediaURL(null);
                setCaption("");
            }, 300);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center ">
            <div
                className="fixed inset-0 bg-black opacity-70"
                // onClick={onClose}
            ></div>

            <div className="bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl shadow-xl w-[90%] max-w-xl relative animate-fadeIn overflow-hidden">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-5 text-gray-600 hover:text-black text-2xl"
                >
                    x
                </button>

                <div className="w-full h-full">
                    {step === 1 && (
                        <div className="flex flex-col items-center justify-center p-10 text-black">
                            <h2 className="text-xl font-semibold mb-4">
                                Create new post
                            </h2>

                            <img
                                src="/upload-outlined.svg"
                                className="h-20"
                            />

                            <p className="mt-4 mb-6 text-lg text-center">
                                Browse photos and videos
                            </p>

                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="bg-blue-600 px-6 py-2 rounded-xl text-white text-lg"
                            >
                                Select from computer
                            </button>

                            <input
                                type="file"
                                hidden
                                ref={fileInputRef}
                                accept="image/*,video/*"
                                onChange={handleSelectFile}
                            />
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex w-full h-[500px] rounded-xl overflow-hidden">
                            <div className="w-1/2 bg-black flex items-center justify-center">
                                {mediaURL?.includes("video")
                                    ? (
                                    <video
                                        src={mediaURL}
                                        controls
                                        className="max-h-full max-w-full"
                                    />)
                                    : (
                                    <img
                                        src={mediaURL!}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                )}
                            </div>

                            <div className="w-1/2 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-black p-5 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={user.profilePicture}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <p className="font-semibold">
                                        {user.name}
                                    </p>
                                </div>

                                <textarea
                                    value={caption}
                                    onChange={(e) =>
                                        setCaption(e.target.value)
                                    }
                                    placeholder="Write a caption..."
                                    className="bg-transparent border-none outline-none flex-1 resize-none text-black text-base"
                                />

                                <button
                                    onClick={handleSharePost}
                                    className="bg-blue-600 w-full py-1 text-white text-base font-medium rounded-xl mt-4"
                                >
                                    Share
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="w-full h-[400px] flex flex-col items-center justify-center text-black">
                            <h2 className="text-xl mb-4">Sharing...</h2>
                            <div className="h-16 w-16 border-4 border-t-transparent border-blue-300 rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
