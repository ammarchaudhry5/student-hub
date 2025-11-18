"use client";

import React, {useState} from 'react';
import { NavBarItem } from "@/components/NavBarItem";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("home");

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-black flex flex-col z-50 overflow-y-auto">
            <div className="p-6">
                <button
                    onClick={() => {
                        setActiveTab("home");
                        router.push("/home");
                        console.log("Active Tab Home");
                    }}
                    className="flex items-center gap-3 rounded-lg hover:bg-green-200 transition p-2 -m-2"
                >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <img src="/images/only-logo.png" alt="Logo" className="w-10 h-10" />
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
                            console.log("Active Tab Home");
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
                            console.log("Active Tab search");
                        }}
                    />

                    {/*<NavBarItem*/}
                    {/*    activeIcon="/tv-filled.svg"*/}
                    {/*    inactiveIcon="/tv-outlined.svg"*/}
                    {/*    title="Reels"*/}
                    {/*    isActive={activeTab === "reels"}*/}
                    {/*    onClick={() => {*/}
                    {/*        setActiveTab("reels");*/}
                    {/*        router.push("/reels");*/}
                    {/*        console.log("Active Tab Reels");*/}
                    {/*    }}*/}
                    {/*/>*/}

                    <NavBarItem
                        activeIcon="/chat-filled.svg"
                        inactiveIcon="/chat-outlined.svg"
                        title="Messages"
                        isActive={activeTab === "messages"}
                        onClick={() => {
                            setActiveTab("messages");
                            router.push("/messages");
                            console.log("Active Tab Messages");
                        }}
                    />

                    <NavBarItem
                        activeIcon="/create-icon.svg"
                        inactiveIcon="/create-outlined-icon.svg"
                        title="Create"
                        isActive={activeTab === "create"}
                        onClick={() => {
                            setActiveTab("create");
                            router.push("/create");
                            console.log("Active Tab Create");
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
                            console.log("Active Tab Notifications");
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
                            console.log("Active Tab Profile");
                        }}
                    />

                </ul>
            </nav>
        </aside>
    );
};

export default NavBar;