"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ActiveMember } from "@/components/ActiveMember";
import { PostCard } from "@/components/PostCard";
import { images, user, posts } from "@/helpers/sampleData";
import { SuggestedUserTile } from "@/components/SuggestedUserTile";

export default function FeedPage() {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 h-screen w-full bg-white">

            <header className="lg:hidden xl:hidden col-span-1 lg:col-span-3 xl:col-span-3 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow-black z-50 ">
                <div className="p-3">
                    <button
                        onClick={() => router.push("/home")}
                        className="flex items-center gap-3 rounded-lg hover:bg-green-200 transition p-2"
                    >
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <img src="/images/only-logo.png" className="w-10 h-10" />
                        </div>
                        <h1 className="text-2xl font-bold">Student Hub</h1>
                    </button>
                </div>
            </header>

            <div className="col-span-1 lg:col-span-2 xl:col-span-2 border-gray-300 border-x-0 lg:border-x-2 bg-white overflow-y-auto">

                <div className="flex px-6 gap-x-4 overflow-x-scroll no-scrollbar py-4">
                    {images.map((image, index) => (
                        <ActiveMember
                            key={index}
                            userImage={image}
                            isActive={index % 2 === 0}
                            onClick={() => console.log("Clicked user:", index)}
                        />
                    ))}
                </div>

                <div className="w-full px-6 md:px-10 lg:px-14">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            user={user}
                            post={post}
                        />
                    ))}
                </div>
            </div>

            <div className={"h-16"}></div>
            <div className="hidden lg:flex xl:flex flex-col p-6 mx-4 bg-white">
                <div className="flex justify-between items-center w-full text-black mb-4">
                    <span className="font-semibold text-lg">Suggested for you</span>
                    <span className="font-medium text-sm cursor-pointer hover:underline">See all</span>
                </div>

                <div className="space-y-3 w-full">
                    <SuggestedUserTile user={user} />
                    <SuggestedUserTile user={user} />
                    <SuggestedUserTile user={user} />
                </div>
            </div>
        </div>
    );
}
