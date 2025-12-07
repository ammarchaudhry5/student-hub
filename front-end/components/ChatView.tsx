import React from 'react';
import { messages } from "@/helpers/sampleData";
import { MessageBubble } from "@/components/MessageBubble";
import { Conversation } from "@/helpers/types";

interface ChatViewProps {
    activeConversation: Conversation;
    messageInput: string;
    setMessageInput: (value: string) => void;
    mobileBack?: () => void;
}

export function ChatView({
                             activeConversation,
                             messageInput,
                             setMessageInput,
                             mobileBack
                         }: ChatViewProps) {

    if (!activeConversation) {
        return (
            <div className="flex items-center justify-center h-full text-gray-500">
                No conversation selected
            </div>
        );
    }

    return (
        <div className="col-span-3 h-full w-full bg-white relative overflow-hidden lg:pb-1 pb-18  flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 px-6 py-3 border-b border-gray-300">

                <div className="flex items-center gap-3">
                    {/* Mobile Back */}
                    {mobileBack && (
                        <button onClick={mobileBack}>
                            <img src="/arrow-back-rounded-ios.svg" className="h-6 w-6 mr-2" />
                        </button>
                    )}

                    {/* UserEntity Info */}
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

            {/* Messages */}
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

            {/* Input Box */}
            <div className="px-3 py-3 mx-5 my-3 border rounded-xl border-gray-800 bg-white">
                <div className="flex items-center gap-3">
                    <img src="/emoji-outline.svg" className="h-6 w-6" />

                    <input
                        type="text"
                        placeholder="MessageEntity..."
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
    );
}
