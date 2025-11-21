"use client";
import React from "react";
import {user} from "@/helpers/sampleData";
import {ProfilePreview} from "@/components/ProfilePreview";

const recentSearches = [
    { id: 1, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 2, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 3, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 4, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 5, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 6, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 7, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 8, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
    { id: 9, name: user.name, sub: user.username, type: "text", img: user.profilePicture},
];

export default function Search() {
    return (
        <div className={"grid grid-cols-5 grid-rows-1 w-full h-vh bg-white"}>
            <div className="col-span-2 p-5 w-full  border-x-2 border-gray-300 text-black overflow-y-auto h-full">
                <h2 className="text-3xl font-bold mb-5">Search</h2>

                <div className="flex items-center mb-5">
                    <div className="flex items-center bg-gray-100 w-full px-4 py-3 rounded-xl">
                        <img
                            src="/search-outlined-icon.svg"
                            className="h-6"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent ml-3 outline-none text-sm placeholder-gray-700 w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-semibold">Recent</p>
                    <button className="text-sm text-blue-400 hover:underline">Clear all</button>
                </div>

                <div className="space-y-4 pb-10">
                    {recentSearches.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex justify-between w-full items-center gap-3">
                                <div className={"flex items-center gap-3"}>
                                    <div className="border-2 border-blue-500 rounded-full flex items-center justify-center overflow-hidden">
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

                                <button
                                    // onClick={onClose}
                                    className=" text-gray-600 hover:text-black text-2xl"
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-3  h-full px-10 py-10 w-full bg-white">
                <div className='border-2 rounded-3xl overflow-hidden border-gray-300 flex justify-items-center'>
                    <ProfilePreview
                        user={user}
                        {...recentSearches}
                    />
                </div>
            </div>
        </div>
    );
}
