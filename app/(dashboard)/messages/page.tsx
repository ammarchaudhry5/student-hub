'use client'

import React, { useState } from 'react';
import {Conversation} from "@/helpers/types";
import {conversations, images, messages, user,} from "@/helpers/sampleData";
import {ConversationItem} from "@/components/ConversationItem";
import {MessageBubble} from "@/components/MessageBubble";
import {ActiveMember} from "@/components/ActiveMember";

export default function MessagesPage() {
    const [activeConversation, setActiveConversation] = useState<Conversation>(conversations[3]);
    const [messageInput, setMessageInput] = useState('');

    return (
        <div className="grid grid-cols-5 w-full h-screen bg-white text-black overflow-hidden">
            {/* LEFT SIDEBAR */}
            <div className="col-span-2 w-full border-x-2 border-gray-300 overflow-y-auto">
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl font-semibold">{user.username}</h1>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center bg-gray-100 w-full px-4 py-3 rounded-xl">
                            <img src="/search-outlined-icon.svg" className="h-6" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent ml-3 outline-none text-sm placeholder-gray-700 w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className={"px-2"}>
                    <div className="flex px-5 gap-x-4 overflow-x-scroll">
                        {images.map((image, index) => (
                            <ActiveMember
                                key={index}
                                userImage={image}
                                isActive={index % 2 === 0}
                                onClick={() => console.log("Clicked user:", index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex border-b border-gray-400 mt-3">
                    <button className="flex-1 px-4 text-black text-lg font-semibold border-b-2 border-white">
                        Messages
                    </button>
                    <button className="flex-1 px-4 py-3 text-gray-400 font-medium hover:text-gray-900">
                        Requests
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto ">
                    {conversations.map((conv) => (
                        <ConversationItem
                            key={conv.id}
                            conversation={conv}
                            isActive={conv.id === activeConversation.id}
                            onClick={() => setActiveConversation(conv)}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-span-3 h-full w-full bg-white relative overflow-hidden flex flex-col">
                <div className="flex items-center justify-between bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 px-6 py-3 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                        <img
                            src={activeConversation.senderUserProfilePicture.profilePicture}
                            alt={activeConversation.senderName.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h2 className="text-black font-medium">{activeConversation.senderName.name}</h2>
                            <p className="text-gray-400 text-sm">{activeConversation.senderUsername.username}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src="/phone-outlined.svg" className="h-8 w-6" />
                        <img src="/video-call-outlined.svg" className="h-8 w-8" />
                        <img src="/info-outlined.svg" className="h-6 w-6" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {activeConversation.id === 4 ? (
                        messages.map((msg) => (
                            <MessageBubble
                                key={msg.id}
                                message={msg}
                                isOwn={msg.senderId.id === 1}
                            />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                            <p>No messages yet</p>
                        </div>
                    )}
                </div>

                <div className="px-3 py-3 mx-5 mb-5 border rounded-xl border-gray-800 bg-white">
                    <div className="flex items-center gap-3">
                        <img src="/emoji-outline.svg" className="h-6 w-6" />
                        <input
                            type="text"
                            placeholder="Message..."
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="flex-1 bg-transparent text-black placeholder-gray-500 focus:outline-none"
                        />
                        <img src="/share-outlined.svg" className="h-6 w-6" />
                        <img src="/photo-outlined.svg" className="h-6 w-6" />
                        <img src="/mic-outlined.svg" className="h-6 w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}
