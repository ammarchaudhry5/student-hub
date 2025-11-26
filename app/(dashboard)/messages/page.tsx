'use client'

import React, { useState } from 'react';
import { Conversation } from "@/helpers/types";
import { conversations, images, messages, user } from "@/helpers/sampleData";
import { ConversationItem } from "@/components/ConversationItem";
import { MessageBubble } from "@/components/MessageBubble";
import { ActiveMember } from "@/components/ActiveMember";
import {ChatView} from "@/components/ChatView";

export default function MessagesPage() {
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
    const [messageInput, setMessageInput] = useState('');

    const isMobile = typeof window !== "undefined" ? window.innerWidth < 1024 : false;

    return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-1 w-full h-screen bg-white relative">

            {/* MOBILE HEADER */}
            <header className="fixed block lg:hidden w-full bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 border-b-2 border-gray-300 shadow z-10">
                <div className="px-5 py-6">
                    <h1 className="text-3xl font-bold">{user.username}</h1>
                </div>
            </header>

            {/* LEFT COLUMN */}
            <div className={`col-span-2 w-full border-x-2 border-gray-300 lg:py-3  py-20 overflow-hidden ${activeConversation && isMobile ? "hidden" : "block"}`}>

                <div className="h-full flex flex-col">
                    {/* Search */}
                    <div className="p-4">
                        <div className="flex items-center bg-gray-100 w-full px-4 py-3 rounded-xl">
                            <img src="/search-outlined-icon.svg" className="h-6" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent ml-3 outline-none text-sm placeholder-gray-700 w-full"
                            />
                        </div>
                    </div>

                    {/* Active Members */}
                    <div className="px-2">
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

                    {/* Tabs */}
                    <div className="flex border-b border-gray-400 mt-3">
                        <button className="flex-1 px-4 text-black text-lg font-semibold border-b-2 border-white">
                            Messages
                        </button>
                        <button className="flex-1 px-4 py-3 text-gray-400 font-medium hover:text-gray-900">
                            Requests
                        </button>
                    </div>

                    {/* Conversations list with scroll */}
                    <div className="flex-1 overflow-y-auto">
                        {conversations.map((conv) => (
                            <ConversationItem
                                key={conv.id}
                                conversation={conv}
                                isActive={activeConversation?.id === conv.id}
                                onClick={() => setActiveConversation(conv)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE (DESKTOP) */}
            <div className="hidden lg:flex xl:flex lg:col-span-3 xl:col-span-3 h-screen w-full bg-white">
                {activeConversation ? (
                    <ChatView
                        activeConversation={activeConversation}
                        messageInput={messageInput}
                        setMessageInput={setMessageInput}
                    />
                ) : (
                    <div className="flex items-center justify-center w-full text-gray-500">
                        Select a conversation
                    </div>
                )}
            </div>

            {/* MOBILE CHAT FULL SCREEN */}
            {activeConversation && isMobile && (
                <div className="block lg:hidden absolute top-0 left-0 w-full h-full bg-white z-20">
                    <ChatView
                        activeConversation={activeConversation}
                        messageInput={messageInput}
                        setMessageInput={setMessageInput}
                        mobileBack={() => setActiveConversation(null)}
                    />
                </div>
            )}
        </div>
    );
}


