"use client";
import React from "react";
import { user } from "@/helpers/sampleData";
import { ProfilePreview } from "@/components/ProfilePreview";

const recentSearches = [
    { id: 1, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 2, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 3, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 4, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 5, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 6, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 7, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 8, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 9, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 10, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 11, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 12, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
    { id: 13, name: user.name, sub: user.username, type: "text", img: user.profilePicture },
];

export default function Search() {
    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 w-full h-screen bg-white relative">
            {/* Fixed header for mobile */}
            <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow z-10">
                <div className="px-5 py-6">
                    <h1 className="text-3xl font-bold">Search</h1>
                </div>
            </header>

            {/* Left column: Search + Recent */}
            <div
                className="lg:col-span-2 xl:col-span-2 w-full border-x-2 border-gray-300 text-black overflow-y-auto"
                style={{ height: '100vh', paddingTop: '72px' }} // adjust top padding for fixed header
            >
                <div className="flex items-center p-5">
                    <div className="flex items-center bg-gray-100 w-full px-4 py-3 rounded-xl">
                        <img src="/search-outlined-icon.svg" className="h-6" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent ml-3 outline-none text-sm placeholder-gray-700 w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-3 px-5">
                    <p className="text-lg font-semibold">Recent</p>
                    <button className="text-sm text-blue-400 hover:underline">Clear all</button>
                </div>

                <div className="space-y-4 px-5">
                    {recentSearches.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex justify-between w-full items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="border-2 border-blue-500 rounded-full overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt="profile"
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium">{item.name}</p>
                                        {item.sub && (
                                            <p className="text-xs text-gray-400">{item.sub}</p>
                                        )}
                                    </div>
                                </div>

                                <button className="text-gray-600 hover:text-black text-2xl">
                                    x
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"h-20"}></div>

            {/* Right column: Profile preview */}
            <div className="hidden lg:flex xl:flex lg:col-span-3 xl:col-span-3 h-full px-10 py-10 w-full bg-white">
                <div className="border-2 rounded-3xl border-gray-300 flex items-center justify-center w-full h-full overflow-hidden">
                    <ProfilePreview user={user} />
                </div>
            </div>
        </div>
    );
}
