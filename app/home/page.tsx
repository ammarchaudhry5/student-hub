"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {ActiveMember} from "@/components/ActiveMember";

export default function FeedPage() {
    const router = useRouter();

    return (
        <div className=" grid grid-cols-1 min-h-screen bg-gray-500">
            <header className="flex py-3 px-6">
                <ActiveMember userImage={"/images/pic-1.jpg"} isActive={true} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-2.jpg"} isActive={false} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-1.jpg"} isActive={false} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-2.jpg"} isActive={true} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-1.jpg"} isActive={false} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-2.jpg"} isActive={true} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-1.jpg"} isActive={false} onClick={()=>{}}></ActiveMember>
                <ActiveMember userImage={"/images/pic-1.jpg"} isActive={true} onClick={()=>{}}></ActiveMember>
            </header>
            <main
                // className="flex-1 p-8"
            >
                <h2 className="text-3xl font-semibold mb-4">Welcome back</h2>
            </main>
        </div>
    );
}
