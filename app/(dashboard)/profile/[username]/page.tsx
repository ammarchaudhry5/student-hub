"use client";

import React, {useState} from "react";
import { user } from "@/helpers/SampleData";

const Profile = () => {
    const [activeTab, setActiveTab] = useState<"posts" | "portfolio" | "saved">("posts");
    return (
        <div className="grid grid-cols-3 h-screen w-full bg-white text-gray-800">
            {/*LEFT SIDE COLUMN USER PIC AND INFO*/}
            <div className="col-span-1 p-6 flex flex-col  my-5 items-center bg-white">
                <div className="flex ">
                    <div className="relative w-64 h-64">
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
                <button
                    className="mt-4 w-[75%] bg-gray-200 text-black py-1 rounded-lg border-2 border-gray-400 shadow-md hover:bg-gray-400 transition font-semibold"
                    onClick={() => console.log("Edit profile clicked")}
                >
                    Edit
                </button>

                <div className="mt-6 flex flex-col items-start text-center space-y-1">
                    <span className="text-2xl font-semibold">{user.name}</span>
                    <span className="text-gray-500">@{user.username}</span>
                    <span className="text-sm text-gray-600">{user.bio}</span>

                    <div className="mt-2 flex flex-col items-start space-y-1">
                        {user.links.map((link, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                className="block text-blue-600 text-sm hover:underline break-all"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 grid-rows-1 gap-4">
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm">
                        <span className="font-bold">{user.followersCount}</span>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm">
                        <span className="font-bold">{user.followingsCount}</span>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-2xl shadow-sm">
                        <span className="font-bold">{user.postsCount}</span>
                        <p className="text-xs text-gray-500">Posts</p>
                    </div>
                </div>
            </div>
            {/*RIGHT SIDE GRID*/}
            <div className="col-span-2 p-4 my-10 mr-6 border-2 border-gray-300 rounded-xl bg-white">

                <div className="flex justify-around bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 py-1 rounded-lg border-2 border-gray-300 shadow mb-6">
                    <span className={`cursor-pointer px-16 py-2 rounded-lg text-lg font-bold ${
                        activeTab === "posts" ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                          onClick={() => setActiveTab("posts")}
                    >
                        Posts
                    </span>
                    <span
                        className={`cursor-pointer px-16 py-2 rounded-lg text-lg font-bold ${
                            activeTab === "portfolio" ? "bg-gray-200" : "hover:bg-gray-200"
                        }`}
                        onClick={() => setActiveTab("portfolio")}
                    >
                        Portfolio
                    </span>
                    <span
                        className={`cursor-pointer px-16 py-2 rounded-lg text-lg font-bold ${
                            activeTab === "saved" ? "bg-gray-200" : "hover:bg-gray-200"
                        }`}
                        onClick={() => setActiveTab("saved")}
                    >
                        Saved
                    </span>
                </div>


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

                {activeTab === "saved" && (
                    <div className="text-center text-gray-700 font-bold">Saved</div>
                )}
            </div>
        </div>
    );
};
export default Profile;
