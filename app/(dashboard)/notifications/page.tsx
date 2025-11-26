"use client";

import React from "react";
import {user, posts, notificationData} from "@/helpers/sampleData";
import {NotificationTile} from "@/components/NotificationTile";
import {PostCard} from "@/components/PostCard";

export default function NotificationsPage() {
    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 w-full h-screen bg-white relative">

            {/* Fixed Header (Mobile Only) */}
            <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow z-10">
                <div className="px-5 py-6">
                    <h1 className="text-3xl font-bold">Notifications</h1>
                </div>
            </header>

            {/* LEFT COLUMN */}

            <div className="lg:col-span-2 xl:col-span-2 w-full border-x-2 border-gray-300 text-black pb-20 pt-25 overflow-y-auto">
                {/*<h1 className="text-3xl font-bold mb-5">Notifications</h1>*/}

                {notificationData.map((group, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">{group.title}</h2>
                        {group.list.map(item => (
                            <NotificationTile
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="hidden lg:flex xl:flex lg:col-span-3 xl:col-span-3 h-full px-10 py-10 w-full bg-white">
                <div className=" flex items-center justify-center w-full h-full overflow-hidden">
                    <div className="px-5 w-[80%] border-2 rounded-t-3xl rounded-b-md border-gray-300">
                        <PostCard
                            key={1}
                            user={user}
                            post={user.posts[0]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
