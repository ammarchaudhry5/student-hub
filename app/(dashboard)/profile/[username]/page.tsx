"use client";

import React, { useState } from "react";
import { user } from "@/helpers/sampleData";

const Profile = () => {
    const [activeTab, setActiveTab] = useState<"posts" | "portfolio" | "saved">("posts");

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 min-h-screen w-full bg-white text-gray-800 relative">

            <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow">
                <div className="px-5 py-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
            </header>

            <div className="p-6 flex flex-col items-center bg-white pt-30">

                <div className="flex justify-center w-full">
                    <div className="
                        w-24 h-24       /* mobile */
                        sm:w-32 sm:h-32 /* small tablets */
                        md:w-40 md:h-40 /* tablets */
                        lg:w-48 lg:h-48 /* laptops */
                        xl:w-64 xl:h-64 /* desktops */
                    ">
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
                    className="mt-6 w-1/2 sm:w-1/3 md:w-1/3 lg:w-[75%] bg-gray-200 text-black py-1 rounded-lg border-2 border-gray-400 shadow-md hover:bg-gray-400 transition font-semibold"
                    onClick={() => console.log("Edit profile clicked")}
                >
                    Edit
                </button>

                <div className="mt-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                    <span className="text-2xl font-semibold">{user.name}</span>
                    <span className="text-gray-500">@{user.username}</span>
                    <span className="text-sm text-gray-600 max-w-xs">{user.bio}</span>

                    <div className="mt-2 flex flex-col items-center lg:items-start space-y-1">
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

                <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.followersCount}</span>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.followingsCount}</span>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.postsCount}</span>
                        <p className="text-xs text-gray-500">Posts</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-2 p-5">
                <div className="p-4 lg:my-10 border-2 border-gray-300 rounded-xl bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300">

                    <div className="flex justify-around bg-black py-2 rounded-lg border-2 border-gray-300 shadow mb-6">
                        {["posts", "portfolio", "saved"].map((tab) => (
                            <span
                                key={tab}
                                onClick={() => setActiveTab(tab as never)}
                                className={`
                                    cursor-pointer rounded-lg uppercase tracking-wide
                                    transition-all duration-300 hover:scale-110 hover:shadow-xl
                                    ${activeTab === tab ? "text-white text-xl font-bold" : "text-gray-300 text-lg font-semibold"}
                                `}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>

                    {activeTab === "posts" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                            {user.posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl aspect-square overflow-hidden border border-gray-200 shadow"
                                >
                                    <img
                                        src={post.posterImage}
                                        alt="post"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "portfolio" && (
                        <div className="text-center text-gray-700 font-bold py-10">Portfolio</div>
                    )}

                    {activeTab === "saved" && (
                        <div className="text-center text-gray-700 font-bold py-10">Saved</div>
                    )}
                </div>

                <div className="h-12"></div>
            </div>
        </div>
    );
};

export default Profile;
