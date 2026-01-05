"use client";

import React, { useState } from "react";

type EditProfileProps = {
    user: any;
    isOpen: boolean;
    onClose: () => void;
};

export default function EditProfile({ user, isOpen, onClose }: EditProfileProps) {
    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio || "");
    const [profilePicture, setProfilePicture] =
        useState<string>(user.profilePicture);
    const [links, setLinks] = useState<string[]>(user.links || []);

    if (!isOpen) return null;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const imageURL = URL.createObjectURL(file);
        setProfilePicture(imageURL);
    };

    const handleSave = () => {
        console.log({ name, username, bio, profilePicture, links });
        alert("Profile updated (frontend only)");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black opacity-60"
            ></div>

            <div className="relative bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl shadow-xl w-[60vw] max-w-[90vw] h-[75vh] flex flex-col animate-fadeIn">

                <div className="sticky top-0 z-10 rounded-t-xl  px-6 py-4">
                    <h2 className="text-3xl font-bold text-black text-center">
                        Edit Profile
                    </h2>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 font-bold text-2xl text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">

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

                    <label className="block text-sm font-semibold mb-1">
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                    />

                    <label className="block text-sm font-semibold mb-1">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                    />

                    <label className="block text-sm font-semibold mb-1">
                        Bio
                    </label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        className="w-full mb-4 px-5 py-2 border border-gray-300 rounded-3xl bg-gray-100"
                    />

                    <label className="block text-sm font-semibold mb-2">
                        Links
                    </label>

                    {links.map((link, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 mb-2"
                        >
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
                                    setLinks(
                                        links.filter((_, i) => i !== index)
                                    )
                                }
                                className="h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={() => setLinks([...links, ""])}
                        className="text-blue-700 text-sm mt-2 cursor-pointer"
                    >
                        + Add Link
                    </button>
                </div>

                <div className="px-6 py-4 flex justify-between rounded-b-xl">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-red-500 border rounded-xl hover:bg-gray-400 text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-8 py-2 bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-black border  border-gray-300 rounded-xl hover:scale-105 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}