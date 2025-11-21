import React, {ReactNode, useState} from "react";
import {User} from "@/helpers/types";

interface ProfilePreviewProps {
    // isOpen: boolean;
    // onClose: () => void;
    user: User;
}

export function ProfilePreview({
                                   // isOpen,
                                   // onClose,
                                   user}: ProfilePreviewProps)
{
    const [activeTab, setActiveTab] = useState<
        "posts" | "portfolio"
        // | "saved"
    >("posts");
    return (
        <div className="flex flex-col h-full w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-gray-800">
            <div className="flex flex-col p-6 mt-5 items-center ">
                <div className="flex ">
                    <div className="relative w-36 h-36">
                        <div
                            onClick={() => console.log("user profile img clicked")}
                            className="cursor-pointer border-4 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition"
                        >
                            <img
                                src={user.profilePicture}
                                alt="profile image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col items-center text-center space-y-1">
                    <span className="text-2xl font-semibold">{user.name}</span>
                    <span className="text-gray-500">@{user.username}</span>
                    <span className="text-sm text-gray-600">{user.bio}</span>

                    <div className="mt-2 flex flex-col items-center space-y-1">
                        {user.links.map((link, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                className="block text-blue-600 text-sm hover:underline break-all transition-all duration-300 hover:scale-105"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105">
                        <span className="font-bold">{user.followersCount}</span>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105">
                        <span className="font-bold">{user.followingsCount}</span>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105">
                        <span className="font-bold">{user.postsCount}</span>
                        <p className="text-xs text-gray-500">Posts</p>
                    </div>
                </div>

                <div className={"flex w-full justify-center gap-3"}>
                    <button
                        className="mt-4 w-[30%] bg-gray-200 text-black py-1 rounded-lg border-2 border-gray-400 shadow-md transition-all duration-300 hover:bg-gray-400 hover:scale-110 hover:shadow-2xl font-semibold"
                        onClick={() => console.log("Edit profile clicked")}
                    >
                        Follow
                    </button>
                    <button
                        className="mt-4 w-[30%] bg-gray-200 text-black py-1 rounded-lg border-2 border-gray-400 shadow-md transition-all duration-300 hover:bg-gray-400 hover:scale-110 hover:shadow-2xl font-semibold"
                        onClick={() => console.log("Edit profile clicked")}
                    >
                        Message
                    </button>
                </div>
            </div>
            <div className="">

                <div className="flex justify-around bg-indigo-800 py-2">
                    <span className={`cursor-pointer rounded-lg font-bold transition-all duration-300  hover:scale-110 hover:shadow-2xl
                     ${activeTab === "posts" ? "text-white text-2xl" : "text-gray-300 text-lg"}
                    `}
                          onClick={() => setActiveTab("posts")}
                    >
                        Posts
                    </span>
                    <span
                        className={`cursor-pointer rounded-lg font-bold transition-all duration-300  hover:scale-110 hover:shadow-2xl
                         ${activeTab === "portfolio" ? "text-white text-2xl" : "text-gray-300 text-lg"}
                        `}
                        onClick={() => setActiveTab("portfolio")}
                    >
                        Portfolio
                    </span>
                    {/*<span*/}
                    {/*    className={`cursor-pointer px-8 py-2 rounded-lg text-lg font-bold ${*/}
                    {/*        activeTab === "saved" ? "bg-gray-200" : "hover:bg-gray-200"*/}
                    {/*    }`}*/}
                    {/*    onClick={() => setActiveTab("saved")}*/}
                    {/*>*/}
                    {/*    Saved*/}
                    {/*</span>*/}
                </div>

                <div className="px-5 py-5">
                    {activeTab === "posts" && (
                        <div className="grid grid-cols-3 gap-2 w-full">
                            {user.posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-0.5 w-full h-full overflow-hidden border border-gray-200 shadow"
                                >
                                    <img
                                        src={post.posterImage}
                                        alt="profile image"
                                        className="w-full h-full rounded-xl object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "portfolio" && (
                        <div className="text-center text-gray-700 font-bold">Portfolio</div>
                    )}

                    {/*{activeTab === "saved" && (*/}
                    {/*    <div className="text-center text-gray-700 font-bold">Saved</div>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    );
}