"use client";

import React from 'react';
import { NavBarItem } from "@/components/NavBarItem";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-black flex flex-col z-50 overflow-y-auto">
            <div className="p-6">
                <button
                    // onClick={() => router.push("/")}
                    className="flex items-center gap-3 rounded-lg hover:bg-white/10 transition p-2 -m-2"
                >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <img src="/images/only-logo.png" alt="Logo" className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold">Student Hub</h1>
                </button>
            </div>

            <nav className="flex-1 px-4">
                <ul className="space-y-2">
                    <NavBarItem icon="/home-filled.svg" title="Home" onClick={() => router.push("/")} />
                    <NavBarItem icon="/search-outlined-icon.svg" title="Search" onClick={() => console.log("search tab clicked!")} />
                    <NavBarItem icon="/tv-outlined.svg" title="Reels" onClick={() => console.log("reels tab clicked!")} />
                    <NavBarItem icon="/chat-outlined.svg" title="Messages" onClick={() => console.log("messages tab clicked!")} />
                    <NavBarItem icon="/create-icon.svg" title="Create" onClick={() => console.log("create tab clicked!")} />
                    <NavBarItem icon="/notification-outlined.svg" title="Notifications" onClick={() => console.log("notifications tab clicked!")} />
                    <NavBarItem icon="/profile-outlined.svg" title="Profile" onClick={() => console.log("profile tab clicked!")} />
                </ul>
            </nav>

            <div className="p-4 border-t border-white/20">
            </div>
        </aside>
    );
};

export default NavBar;









// "use client";
// import React from 'react'
// import {NavBarItem} from "@/components/NavBarItem";
// import {router} from "next/client";
//
// const NavBar = () => {
//     return (
//         <header className="grid grid-cols-1 bg-gradient-to-br from-blue-700 via-blue-400 to-indigo-200 text-white py-4 px-8 flex-col justify-between items-center ">
//             <div className="flex flex-col items-start gap-2">
//                 <button
//                     className="mx-2 mb-5 p-1 rounded hover:bg-indigo-600"
//                     //onClick={() => router.back()}
//                 >
//                     <div className="flex">
//                         <div className="w-10 h-10 p-1 mr-2 bg-white rounded-lg flex items-center justify-center">
//                             <img src="/images/only-logo.png" alt="Logo" width={32}/>
//                         </div>
//                         <h1 className="text-2xl mt-1 font-bold">Student Hub</h1>
//                     </div>
//                 </button>
//                 <NavBarItem icon={"/home-filled.svg"} title={"Home"} onClick={() => {console.log("home tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/search-icon.svg"} title={"Search"} onClick={() => {console.log("search tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/tv-outlined.svg"} title={"Reels"} onClick={() => {console.log("reels tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/chat-outlined.svg"} title={"Messages"} onClick={() => {console.log("messages tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/create-icon.svg"} title={"Create"} onClick={() => {console.log("create tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/notification-outlined.svg"} title={"Notifications"} onClick={() => {console.log("notifications tab clicked!")}}></NavBarItem>
//                 <NavBarItem icon={"/profile-outlined.svg"} title={"Profile"} onClick={() => {console.log("profile tab clicked!")}}></NavBarItem>
//             </div>
//         </header>
//     )
// }
// export default NavBar
