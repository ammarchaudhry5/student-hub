import {Conversation} from "@/helpers/types";
import React from "react";

interface props {
    conversation: Conversation;
    isActive: boolean;
    onClick: () => void
}
export const ConversationItem: React.FC<props> = ({
                                         conversation,
                                         isActive,
                                         onClick
}) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 m-3 p-3 cursor-pointer rounded-xl hover:bg-gray-100 transition-colors ${
            isActive ? ' bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 rounded-xl' : ''
        }`}
    >
        <div className="relative flex-shrink-0">
            <img
                src={conversation.senderUserProfilePicture.profilePicture}
                alt={conversation.senderUserProfilePicture.name}
                className="w-14 h-14 rounded-full object-cover"
            />
            {conversation.isOnline && (
                <div className="absolute top-0 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            )}
        </div>

        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
                <span className="text-black font-medium truncate">{conversation.senderName.name}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                    {conversation.isMuted && (
                        <img src="/mute-outlined.svg" className="h-4 w-4" />
                    )}
                    <span className="text-gray-400 text-sm">{conversation.timestamp}</span>
                    {conversation.unreadCount > 0 && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                </div>
            </div>
            <div className="flex items-center gap-1">
                {conversation.reactionEmoji && <span className="text-sm">{conversation.reactionEmoji}</span>}
                <p className="text-gray-400 text-sm truncate">
                    {conversation.hasAttachment && <span className="font-medium">Anas sent an attachment. </span>}
                    {conversation.lastMessage}
                </p>
            </div>
        </div>
    </div>
);