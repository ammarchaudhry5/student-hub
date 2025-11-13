"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {ActiveMember} from "@/components/ActiveMember";
import {FeedCard} from "@/components/FeedCard";

export default function FeedPage() {
    const router = useRouter();
    const IMAGES=[
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
        "/images/pic-1.jpg",
        "/images/pic-2.jpg",
        "/images/pic-1.jpg",
    ]

    return (
        <div className=" grid grid-cols-1 w-1/2 min-h-screen bg-gray-500">
            <header className="flex py-3 px-6 gap-x-[4] overflow-x-scroll">
                {IMAGES.map((image, index) => (
                    <ActiveMember
                        key={index}
                        userImage={image}
                        isActive={index % 2 === 0}
                        onClick={() => console.log("Clicked user:", index)}
                    />
                ))}
            </header>
            <main className="flex-1 p-8">
                <FeedCard
                    userImage={"/images/pic-1.jpg"}
                    userName={"Ammar"}
                    postedTime={"4h"}
                    poster={"/images/pic-1.jpg"}
                    likesCount={1786}
                    description={"My experience with react/next js is good!"}
                />
            </main>
        </div>
    );
}
