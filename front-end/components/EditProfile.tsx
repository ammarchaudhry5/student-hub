"use client";

import React, { useState } from "react";

type EditProfileProps = {
    user: any;
    onCancel: () => void;
};

export default function EditProfile({ user, onCancel }: EditProfileProps) {
    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio || "");
    const [profilePicture, setProfilePicture] =
        useState<string>(user.profilePicture);
    const [links, setLinks] = useState<string[]>(user.links || []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const imageURL = URL.createObjectURL(file);
        setProfilePicture(imageURL);
    };

    const handleSave = () => {
        console.log({ name, username, bio, profilePicture, links });
        alert("Profile updated (frontend only)");
        onCancel();
    };

    return (
        <div
            className="bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300
                       rounded-xl p-6 flex flex-col w-[60vw] max-w-[90vw] h-[70vh]"
        >
            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto pr-2">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Edit Profile
                </h2>

                {/* PROFILE IMAGE */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow mb-3">
                        <img
                            src={profilePicture}
                            alt="profile preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <label className="cursor-pointer text-sm font-semibold text-blue-700">
                        Change Picture
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* NAME */}
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                />

                {/* USERNAME */}
                <label className="block text-sm font-semibold mb-1">
                    Username
                </label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                />

                {/* BIO */}
                <label className="block text-sm font-semibold mb-1">Bio</label>
                <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={3}
                    className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                />

                {/* LINKS */}
                <label className="block text-sm font-semibold mb-2">Links</label>
                {links.map((link, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                        <input
                            value={link}
                            onChange={(e) => {
                                const updated = [...links];
                                updated[index] = e.target.value;
                                setLinks(updated);
                            }}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                        />
                        <button
                            onClick={() =>
                                setLinks(links.filter((_, i) => i !== index))
                            }
                            className="h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full"
                        >
                            ✕
                        </button>
                    </div>
                ))}

                <button
                    onClick={() => setLinks([...links, ""])}
                    className="text-blue-700 text-sm mb-6"
                >
                    + Add Link
                </button>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-between mt-2">
                <button
                    onClick={onCancel}
                    className="px-6 py-2 border border-gray-400 rounded-xl hover:bg-gray-200"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="px-8 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}




// "use client";
//
// import React, { useState } from "react";
//
// type EditProfileProps = {
//     user: any;
//     onCancel: () => void;
// };
//
// export default function EditProfile({ user, onCancel }: EditProfileProps) {
//     const [name, setName] = useState(user.name);
//     const [username, setUsername] = useState(user.username);
//     const [bio, setBio] = useState(user.bio || "");
//     const [profilePicture, setProfilePicture] =
//         useState(user.profilePicture);
//     const [links, setLinks] = useState<string[]>(user.links || []);
//
//     const handleSave = () => {
//         console.log({
//             name,
//             username,
//             bio,
//             profilePicture,
//             links,
//         });
//         alert("Profile updated (frontend only)");
//         onCancel();
//     };
//
//     return (
//         <div className="bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl p-6 w-full">
//
//             <h2 className="text-2xl font-bold mb-6 text-center">
//                 Edit Profile
//             </h2>
//
//             {/* Profile Image */}
//             <label className="block text-sm font-semibold mb-1">
//                 Choose Picture
//             </label>
//             <input
//                 value={profilePicture}
//                 onChange={(e) => setProfilePicture(e.target.value)}
//                 className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-4xl bg-gray-100"
//             />
//
//             <label className="block text-sm font-semibold mb-1">
//                 Name
//             </label>
//             <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-4xl bg-gray-100"
//             />
//
//             <label className="block text-sm font-semibold mb-1">
//                 Username
//             </label>
//             <input
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-4xl bg-gray-100"
//             />
//
//             <label className="block text-sm font-semibold mb-1">
//                 Bio
//             </label>
//             <textarea
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//                 rows={3}
//                 className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
//             />
//
//             <label className="block text-sm font-semibold mb-2">
//                 Links
//             </label>
//             {links.map((link, index) => (
//                 <div key={index} className="flex gap-2 mb-2">
//                     <input
//                         value={link}
//                         onChange={(e) => {
//                             const updated = [...links];
//                             updated[index] = e.target.value;
//                             setLinks(updated);
//                         }}
//                         className="flex-1 px-3 py-2 border border-gray-300 rounded-3xl bg-gray-100"
//                     />
//                     <button
//                         onClick={() =>
//                             setLinks(links.filter((_, i) => i !== index))
//                         }
//                         className="h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full"
//                     >
//                         ✕
//                     </button>
//                 </div>
//             ))}
//
//             <button
//                 onClick={() => setLinks([...links, ""])}
//                 className="text-blue-600 text-sm mb-6"
//             >
//                 + Add Link
//             </button>
//
//             <div className="flex justify-between">
//                 <button
//                     onClick={onCancel}
//                     className="px-6 py-2 border rounded-lg"
//                 >
//                     Cancel
//                 </button>
//
//                 <button
//                     onClick={handleSave}
//                     className="px-6 py-2 bg-black text-white rounded-lg"
//                 >
//                     Save Changes
//                 </button>
//             </div>
//         </div>
//     );
// }
//
//
//
//
//
//
//
//
//
//
//
// // "use client";
// //
// // import React, { useState } from "react";
// //
// // type EditProfileProps = {
// //     user: any;
// //     onCancel: () => void;
// // };
// //
// // export default function EditProfile({
// //                                         user,
// //                                         onCancel,
// //                                     }: EditProfileProps) {
// //     const [name, setName] = useState(user.name);
// //     const [username, setUsername] = useState(user.username);
// //     const [bio, setBio] = useState(user.bio || "");
// //     const [profilePicture, setProfilePicture] = useState(
// //         user.profilePicture
// //     );
// //     const [links, setLinks] = useState<string[]>(user.links || []);
// //
// //     const handleSave = () => {
// //         const updatedUser = {
// //             name,
// //             username,
// //             bio,
// //             profilePicture,
// //             links,
// //         };
// //
// //         console.log("UPDATED USER 👉", updatedUser);
// //         alert("Profile updated (frontend only)");
// //         onCancel();
// //     };
// //
// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 flex justify-center items-center px-4">
// //
// //             <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-300 p-6">
// //
// //                 <h2 className="text-2xl font-bold mb-6 text-center">
// //                     Edit Profile
// //                 </h2>
// //
// //                 {/* Profile Image */}
// //                 <div className="flex flex-col items-center mb-6">
// //                     <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500 shadow">
// //                         <img
// //                             src={profilePicture}
// //                             alt="profile"
// //                             className="w-full h-full object-cover"
// //                         />
// //                     </div>
// //
// //                     <input
// //                         type="text"
// //                         value={profilePicture}
// //                         onChange={(e) => setProfilePicture(e.target.value)}
// //                         placeholder="Profile image URL"
// //                         className="mt-3 w-full px-3 py-2 border rounded-lg"
// //                     />
// //                 </div>
// //
// //                 {/* Name */}
// //                 <input
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     placeholder="Name"
// //                     className="w-full mb-3 px-3 py-2 border rounded-lg"
// //                 />
// //
// //                 {/* Username */}
// //                 <input
// //                     value={username}
// //                     onChange={(e) => setUsername(e.target.value)}
// //                     placeholder="Username"
// //                     className="w-full mb-3 px-3 py-2 border rounded-lg"
// //                 />
// //
// //                 {/* Bio */}
// //                 <textarea
// //                     value={bio}
// //                     onChange={(e) => setBio(e.target.value)}
// //                     placeholder="Bio"
// //                     rows={3}
// //                     className="w-full mb-3 px-3 py-2 border rounded-lg"
// //                 />
// //
// //                 {/* Links */}
// //                 <div className="mb-4">
// //                     {links.map((link, index) => (
// //                         <div key={index} className="flex gap-2 mb-2">
// //                             <input
// //                                 value={link}
// //                                 onChange={(e) => {
// //                                     const updated = [...links];
// //                                     updated[index] = e.target.value;
// //                                     setLinks(updated);
// //                                 }}
// //                                 className="flex-1 px-3 py-2 border rounded-lg"
// //                             />
// //                             <button
// //                                 onClick={() =>
// //                                     setLinks(links.filter((_, i) => i !== index))
// //                                 }
// //                                 className="px-3 bg-red-500 text-white rounded-lg"
// //                             >
// //                                 ✕
// //                             </button>
// //                         </div>
// //                     ))}
// //
// //                     <button
// //                         onClick={() => setLinks([...links, ""])}
// //                         className="text-blue-600 text-sm hover:underline"
// //                     >
// //                         + Add Link
// //                     </button>
// //                 </div>
// //
// //                 {/* Buttons */}
// //                 <div className="flex justify-between mt-6">
// //                     <button
// //                         onClick={onCancel}
// //                         className="px-6 py-2 rounded-lg border border-gray-400 hover:bg-gray-200"
// //                     >
// //                         Cancel
// //                     </button>
// //
// //                     <button
// //                         onClick={handleSave}
// //                         className="px-6 py-2 rounded-lg bg-black text-white hover:scale-105 transition"
// //                     >
// //                         Save Changes
// //                     </button>
// //                 </div>
// //
// //             </div>
// //         </div>
// //     );
// // }
