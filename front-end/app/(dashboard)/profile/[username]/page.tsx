"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EditProfile from "@/components/EditProfile";
import { Modal } from "@/components/Modal";
import { user } from "@/helpers/sampleData";

export default function ProfilePage() {
    useRouter();
    const [activeTab, setActiveTab] =
        useState<"posts" | "portfolio" | "saved">("posts");

    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 min-h-screen w-full bg-white text-gray-800 relative">

            {/* EDIT PROFILE MODAL */}
            <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                <EditProfile
                    user={user}
                    onCancel={() => setIsEditOpen(false)}
                />
            </Modal>

            {/* MOBILE HEADER */}
            <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow z-40">
                <div className="px-5 py-6">
                    <h1 className="text-3xl font-bold">Profile</h1>
                </div>
            </header>

            {/* LEFT PROFILE SECTION */}
            <div className="p-6 flex flex-col items-center bg-white pt-30">

                <div className="flex justify-center w-full">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64">
                        <div className="border-4 border-blue-500 rounded-full w-full h-full overflow-hidden shadow-md">
                            <img
                                src={user.profilePicture}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsEditOpen(true)}
                    className="mt-6 w-2/3 bg-gray-200 py-1 rounded-lg border-2 border-gray-400 shadow hover:bg-gray-300 font-semibold"
                >
                    Edit Profile
                </button>

                <div className="mt-4 text-center space-y-1">
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-gray-500">@{user.username}</p>
                    <p className="text-sm text-gray-600 max-w-xs">{user.bio}</p>

                    <div className="mt-3">
                        {user.links?.map((link, index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                className="block text-blue-600 text-sm hover:underline break-all"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.followersCount}</span>
                        <p className="text-xs text-gray-500">Followers</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.followingsCount}</span>
                        <p className="text-xs text-gray-500">Following</p>
                    </div>
                    <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
                        <span className="font-bold">{user.postsCount}</span>
                        <p className="text-xs text-gray-500">Posts</p>
                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2 px-5">
                <div className="p-4 border-2 mt-5 border-gray-300 rounded-xl bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300">

                    <div className="flex justify-around bg-black py-2 rounded-lg border-2 border-gray-300 shadow mb-6">
                        {["posts", "portfolio", "saved"].map((tab) => (
                            <span
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`cursor-pointer uppercase transition
                                ${activeTab === tab
                                    ? "text-white text-xl font-bold"
                                    : "text-gray-300 font-semibold"}`}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>

                    {activeTab === "posts" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {user.posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl aspect-square overflow-hidden shadow"
                                >
                                    <img
                                        src={post.posterImage}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab !== "posts" && (
                        <div className="text-center py-10 font-bold">
                            {activeTab}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}









// "use client";
//
// import React, {useState} from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import EditProfile from "@/components/EditProfile";
// import { user } from "@/helpers/sampleData";
//
// export default function ProfilePage() {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//
//     const [activeTab, setActiveTab] = useState<"posts" | "portfolio" | "saved">("posts");
//
//     const isEditMode = searchParams.get("edit") === "true";
//
//     if (isEditMode) {
//         return (
//             <EditProfile
//                 user={user}
//                 onCancel={() => router.push(`/profile/${user.username}`)}
//             />
//         );
//     }
//
//     return (
//         <div className="grid lg:grid-cols-3 grid-cols-1 min-h-screen w-full bg-white text-gray-800 relative">
//
//             <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow">
//                 <div className="px-5 py-6">
//                     <h1 className="text-3xl font-bold">Profile</h1>
//                 </div>
//             </header>
//
//             {/* LEFT PROFILE SECTION */}
//             <div className="p-6 flex flex-col items-center bg-white pt-30">
//
//                 <div className="flex justify-center w-full">
//                     <div className="
//                             w-24 h-24       /* mobile */
//                             sm:w-32 sm:h-32 /* small tablets */
//                             md:w-40 md:h-40 /* tablets */
//                             lg:w-48 lg:h-48 /* laptops */
//                             xl:w-64 xl:h-64 /* desktops */
//                         ">
//                         <div
//                             onClick={() => console.log("user profile img clicked")}
//                             className="cursor-pointer border-4 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition"
//                         >
//                             <img
//                                 src={user.profilePicture}
//                                 alt="profile image"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//
//                 <button
//                     onClick={() =>
//                         router.push(`/profile/${user.username}?edit=true`)
//                     }
//                     className="mt-6 w-2/3 bg-gray-200 py-1 rounded-lg border-2 border-gray-400 shadow hover:bg-gray-300 font-semibold"
//                 >
//                     Edit
//                 </button>
//
//                 <div className="mt-4 text-center space-y-1">
//                     <h2 className="text-xl font-bold">{user.name}</h2>
//                     <p className="text-gray-500">@{user.username}</p>
//                     <p className="text-sm text-gray-600 max-w-xs">{user.bio}</p>
//
//                     <div className="mt-3">
//                         {user.links?.map((link, index) => (
//                             <a
//                                 key={index}
//                                 href={link}
//                                 target="_blank"
//                                 className="block text-blue-600 text-sm hover:underline break-all"
//                             >
//                                 {link}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="mt-6 grid grid-cols-3 gap-4">
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.followersCount}</span>
//                         <p className="text-xs text-gray-500">Followers</p>
//                     </div>
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.followingsCount}</span>
//                         <p className="text-xs text-gray-500">Following</p>
//                     </div>
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.postsCount}</span>
//                         <p className="text-xs text-gray-500">Posts</p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* RIGHT SIDE CONTENT */}
//             <div className="lg:col-span-2 px-5">
//                 <div className="p-4 border-2 mt-5 border-gray-300 rounded-xl bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300">
//
//                     <div className="flex justify-around bg-black py-2 rounded-lg border-2 border-gray-300 shadow mb-6">
//                         {["posts", "portfolio", "saved"].map((tab) => (
//                             <span
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab as never)}
//                                 className={`
//                         cursor-pointer rounded-lg uppercase tracking-wide
//                         transition-all duration-300 hover:scale-110 hover:shadow-xl
//                         ${activeTab === tab ? "text-white text-xl font-bold" : "text-gray-300 text-base font-semibold"}
//                     `}
//                             >
//                     {tab}
//                 </span>
//                         ))}
//                     </div>
//
//                     {activeTab === "posts" && (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//                             {user.posts.map((post, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white rounded-xl aspect-square overflow-hidden border border-gray-200 shadow"
//                                 >
//                                     <img
//                                         src={post.posterImage}
//                                         alt="post"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//
//                     {activeTab === "portfolio" && (
//                         <div className="text-center text-gray-700 font-bold py-10">Portfolio</div>
//                     )}
//
//                     {activeTab === "saved" && (
//                         <div className="text-center text-gray-700 font-bold py-10">Saved</div>
//                     )}
//                 </div>
//
//                 <div className="h-12"></div>
//             </div>
//
//         </div>
//     );
// }










// "use client";
//
// import React, { useState } from "react";
// import { user } from "@/helpers/sampleData";
// import {router} from "next/client";
// import { useRouter, useSearchParams } from "next/navigation";
//
// const Profile = () => {
//     const [activeTab, setActiveTab] = useState<"posts" | "portfolio" | "saved">("posts");
//
//     return (
//         <div className="grid lg:grid-cols-3 grid-cols-1 min-h-screen w-full bg-white text-gray-800 relative">
//
//             <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow">
//                 <div className="px-5 py-6">
//                     <h1 className="text-3xl font-bold">Profile</h1>
//                 </div>
//             </header>
//
//             <div className="p-6 flex flex-col items-center bg-white pt-30">
//
//                 <div className="flex justify-center w-full">
//                     <div className="
//                         w-24 h-24       /* mobile */
//                         sm:w-32 sm:h-32 /* small tablets */
//                         md:w-40 md:h-40 /* tablets */
//                         lg:w-48 lg:h-48 /* laptops */
//                         xl:w-64 xl:h-64 /* desktops */
//                     ">
//                         <div
//                             onClick={() => console.log("user profile img clicked")}
//                             className="cursor-pointer border-4 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition"
//                         >
//                             <img
//                                 src={user.profilePicture}
//                                 alt="profile image"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//
//                 <button
//                     onClick={() => router.push(`/profile/${user.username}?edit=true`)}
//                     className="mt-6 w-2/3 bg-gray-200 py-1 rounded-lg border shadow hover:bg-gray-300 font-semibold"
//                 >
//                     Edit
//                 </button>
//
//                 <div className="mt-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
//                     <span className="text-2xl font-semibold">{user.name}</span>
//                     <span className="text-gray-500">@{user.username}</span>
//                     <span className="text-sm text-gray-600 max-w-xs">{user.bio}</span>
//
//                     <div className="mt-2 flex flex-col items-center lg:items-start space-y-1">
//                         {user.links.map((link, index) => (
//                             <a
//                                 key={index}
//                                 href={link}
//                                 target="_blank"
//                                 className="block text-blue-600 text-sm hover:underline break-all"
//                             >
//                                 {link}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//
//                 <div className="mt-6 grid grid-cols-3 gap-4">
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.followersCount}</span>
//                         <p className="text-xs text-gray-500">Followers</p>
//                     </div>
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.followingsCount}</span>
//                         <p className="text-xs text-gray-500">Following</p>
//                     </div>
//                     <div className="text-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm">
//                         <span className="font-bold">{user.postsCount}</span>
//                         <p className="text-xs text-gray-500">Posts</p>
//                     </div>
//                 </div>
//             </div>
//
//             {/* RIGHT SIDE CONTENT */}
//             <div className="lg:col-span-2 p-5">
//                 <div className="p-4 border-2 border-gray-300 rounded-xl bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300">
//
//                     <div className="flex justify-around bg-black py-2 rounded-lg border-2 border-gray-300 shadow mb-6">
//                         {["posts", "portfolio", "saved"].map((tab) => (
//                             <span
//                                 key={tab}
//                                 onClick={() => setActiveTab(tab as never)}
//                                 className={`
//                                     cursor-pointer rounded-lg uppercase tracking-wide
//                                     transition-all duration-300 hover:scale-110 hover:shadow-xl
//                                     ${activeTab === tab ? "text-white text-xl font-bold" : "text-gray-300 text-base font-semibold"}
//                                 `}
//                             >
//                                 {tab}
//                             </span>
//                         ))}
//                     </div>
//
//                     {activeTab === "posts" && (
//                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//                             {user.posts.map((post, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white rounded-xl aspect-square overflow-hidden border border-gray-200 shadow"
//                                 >
//                                     <img
//                                         src={post.posterImage}
//                                         alt="post"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//
//                     {activeTab === "portfolio" && (
//                         <div className="text-center text-gray-700 font-bold py-10">Portfolio</div>
//                     )}
//
//                     {activeTab === "saved" && (
//                         <div className="text-center text-gray-700 font-bold py-10">Saved</div>
//                     )}
//                 </div>
//
//                 <div className="h-12"></div>
//             </div>
//         </div>
//     );
// };
//
// export default Profile;
