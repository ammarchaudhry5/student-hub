"use client";

import React from "react";
import {user, posts, notificationData} from "@/helpers/sampleData";
import {NotificationTile} from "@/components/NotificationTile";
import {PostCard} from "@/components/PostCard";

export default function NotificationsPage() {
    return (
        <div className="grid grid-cols-3 grid-rows-1 h-screen">

            <div className="col-span-1 p-5 w-full bg-white border-x-2 border-gray-300 text-black overflow-y-auto h-full">
                <h1 className="text-3xl font-bold mb-5">Notifications</h1>

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

            <div className="col-span-2 w-full flex justify-center items-center h-full">
                <div className="px-5 w-[80%] border-2 rounded-t-3xl rounded-b-md border-gray-300">
                    <PostCard
                        key={1}
                        user={user}
                        post={user.posts[0]}
                    />
                </div>
            </div>
        </div>
    );
}
