"use client";

import React, { useState } from "react";
import { NavBarItem } from "@/components/NavBarItem";
import { useRouter } from "next/navigation";
import { Post } from "@/helpers/types";
import CreatePostModal from "@/components/CreatePostModal";
import { user } from "@/helpers/sampleData";

const NavBar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("home");
    const [createOpen, setCreateOpen] = useState(false);

    const handlePostCreated = (post: Post) => {
        console.log("New PostEntity Created:", post);
    };

    return (
        <div>
            {/* XL LG SIMPLE NAVBAR */}
            <aside className="
                hidden lg:flex fixed left-0 top-0 h-screen w-64
                bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300
                text-black flex-col z-50 overflow-y-auto
            ">
                <div className="p-6">
                    <button
                        onClick={() => {
                            setActiveTab("home");
                            router.push("/home");
                        }}
                        className="flex items-center gap-3 rounded-lg hover:bg-green-200 transition p-2 -m-2"
                    >
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <img src="/images/only-logo.png" className="w-10 h-10" />
                        </div>
                        <h1 className="text-2xl font-bold">Student Hub</h1>
                    </button>
                </div>

                <nav className="flex-1 px-4 mt-5">
                    <ul className="space-y-8">

                        <NavBarItem
                            activeIcon="/home-filled.svg"
                            inactiveIcon="/home-outlined.svg"
                            title="Home"
                            isActive={activeTab === "home"}
                            onClick={() => {
                                setActiveTab("home");
                                router.push("/home");
                            }}
                        />

                        <NavBarItem
                            activeIcon="/search-filled-icon.svg"
                            inactiveIcon="/search-outlined-icon.svg"
                            title="Search"
                            isActive={activeTab === "search"}
                            onClick={() => {
                                setActiveTab("search");
                                router.push("/search");
                            }}
                        />

                        <NavBarItem
                            activeIcon="/chat-filled.svg"
                            inactiveIcon="/chat-outlined.svg"
                            title="Messages"
                            isActive={activeTab === "messages"}
                            onClick={() => {
                                setActiveTab("messages");
                                router.push("/messages");
                            }}
                        />

                        <NavBarItem
                            activeIcon="/create-icon.svg"
                            inactiveIcon="/create-outlined-icon.svg"
                            title="Create"
                            isActive={activeTab === "create"}
                            onClick={() => {
                                setActiveTab("create");
                                setCreateOpen(true);
                            }}
                        />

                        <NavBarItem
                            activeIcon="/notification-filled.svg"
                            inactiveIcon="/notification-outlined.svg"
                            title="Notifications"
                            isActive={activeTab === "notifications"}
                            onClick={() => {
                                setActiveTab("notifications");
                                router.push("/notifications");
                            }}
                        />

                        <NavBarItem
                            activeIcon="/profile-filled.svg"
                            inactiveIcon="/profile-outlined.svg"
                            title="Profile"
                            isActive={activeTab === "profile"}
                            onClick={() => {
                                setActiveTab("profile");
                                router.push("/profile/[username]");
                            }}
                        />

                    </ul>
                </nav>
            </aside>


            {/* MB TB TOP-RIGHT NOTIFICATION */}
            <button
                className="
                    lg:hidden fixed top-4 right-4 bg-gradient-to-br from-blue-200 via-green-100 to-indigo-200 shadow-lg rounded-full p-2
                    z-[60] border border-gray-400
                "
                onClick={() => {
                    setActiveTab("notifications");
                    router.push("/notifications");
                }}
            >
                <img
                    src={
                        activeTab === "notifications"
                            ? "/notification-filled.svg"
                            : "/notification-outlined.svg"
                    }
                    className="w-7 h-7"
                />
            </button>


            {/* MB TB BOTTOM NAVBAR */}
            <div
                className="lg:hidden fixed bottom-0 left-0 w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 shadow-2xl flex justify-between px-6 py-3 z-50"
            >
                <NavBarItem
                    activeIcon="/home-filled.svg"
                    inactiveIcon="/home-outlined.svg"
                    title="Home"
                    isActive={activeTab === "home"}
                    showLabel={false}
                    onClick={() => {
                        setActiveTab("home");
                        router.push("/home");
                    }}
                />

                <NavBarItem
                    activeIcon="/search-filled-icon.svg"
                    inactiveIcon="/search-outlined-icon.svg"
                    title="Search"
                    isActive={activeTab === "search"}
                    showLabel={false}
                    onClick={() => {
                        setActiveTab("search");
                        router.push("/search");
                    }}
                />

                <NavBarItem
                    activeIcon="/create-icon.svg"
                    inactiveIcon="/create-outlined-icon.svg"
                    title="Create"
                    isActive={activeTab === "create"}
                    showLabel={false}
                    onClick={() => {
                        setActiveTab("create");
                        setCreateOpen(true);
                    }}
                />

                <NavBarItem
                    activeIcon="/chat-filled.svg"
                    inactiveIcon="/chat-outlined.svg"
                    title="Messages"
                    isActive={activeTab === "messages"}
                    showLabel={false}
                    onClick={() => {
                        setActiveTab("messages");
                        router.push("/messages");
                    }}
                />

                <NavBarItem
                    activeIcon="/profile-filled.svg"
                    inactiveIcon="/profile-outlined.svg"
                    title="Profile"
                    isActive={activeTab === "profile"}
                    showLabel={false}
                    onClick={() => {
                        setActiveTab("profile");
                        router.push("/profile/[username]");
                    }}
                />
            </div>

            <CreatePostModal
                isOpen={createOpen}
                onClose={() => {
                    setActiveTab("home");
                    router.push("/home");
                    setCreateOpen(false);
                }}
                user={user}
                onPostCreated={handlePostCreated}
            />
        </div>
    );
};

export default NavBar;
