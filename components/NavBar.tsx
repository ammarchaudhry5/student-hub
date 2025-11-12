"use client";
import React from 'react'
import {NavBarItem} from "@/components/NavBarItem";
import {router} from "next/client";

const NavBar = () => {
    return (
        <header className="grid grid-cols-1 bg-gradient-to-br from-blue-700 via-blue-400 to-indigo-200 text-white py-4 px-8 flex-col justify-between items-center">
            {/*left side nav bar*/}
            <div className="flex flex-col items-start gap-2">
                <button
                    className="mx-2 mb-5 p-1 rounded hover:bg-indigo-600"
                    //onClick={() => router.back()}
                >
                    <div className="flex">
                        <div className="w-10 h-10 p-1 mr-2 bg-white rounded-lg flex items-center justify-center">
                            <img src="/images/only-logo.png" alt="Logo" width={32}/>
                        </div>
                        <h1 className="text-2xl mt-1 font-bold">Student Hub</h1>
                    </div>
                </button>
                <NavBarItem icon={"/home-filled.svg"} title={"Home"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/search-icon.svg"} title={"Search"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/tv-outlined.svg"} title={"Reels"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/chat-outlined.svg"} title={"Messages"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/create-icon.svg"} title={"Create"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/notification-outlined.svg"} title={"Notifications"} onClick={() => {}}></NavBarItem>
                <NavBarItem icon={"/profile-outlined.svg"} title={"Profile"} onClick={() => {}}></NavBarItem>
            </div>
        </header>
    )
}
export default NavBar
