"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ActiveMember } from "@/components/ActiveMember";
import { PostCard } from "@/components/PostCard";
import {images, user, posts, comments} from "@/helpers/SampleData";
import {SuggestedUserTile} from "@/components/SuggestedUserTile";

export default function FeedPage() {
    const router = useRouter();
    return (
        <div className="grid grid-cols-3 h-screen w-full">
            {/*Center Feed Section*/}
            <div className="col-span-2 border-x-2 border-gray-300 bg-white">
                <div className="flex px-6 my-3 gap-x-[4] overflow-x-scroll overflow-y-auto">
                    {images.map((image, index) => (
                        <ActiveMember
                            key={index}
                            userImage={image}
                            isActive={index % 2 === 0}
                            onClick={() => console.log("Clicked user:", index)}
                        />
                    ))}
                </div>
                <div className="flex-1 px-25">
                    {posts.map((post, index) => (
                        <PostCard
                            key={index}
                            user={user}
                            post={post}
                            // comment={comments[index]}
                        />
                    ))}
                </div>
            </div>
            {/*Right Side Suggestions*/}
            <div className="col-span-1 p-6 flex flex-col mx-10 items-center bg-white">
                <div className="flex justify-between items-center w-full text-black">
                    <span className="font-semibold text-base">
                        Suggested for you
                    </span>
                    <span className="font-medium text-sm">
                        See all
                    </span>
                </div>
                <div>
                    <SuggestedUserTile
                        // key={index}
                        user={user}
                    >
                    </SuggestedUserTile>
                </div>
            </div>
        </div>
    );
}