import React from "react";
import {Message} from "@/helpers/types";

export const MessageBubble: React.FC<{ message: Message; isOwn: boolean }> = ({ message, isOwn }) => {
    // if (message.type === 'story-reply' && message.storyReply) {
    //     return (
    //         <div className="flex flex-col items-start gap-2 my-6">
    //             <span className="text-gray-400 text-sm">Mentioned you in their story</span>
    //             <div className="flex items-center gap-2 mb-2">
    //                 <img src="/images/user-1.jpg" alt="Kar Diya" className="w-8 h-8 rounded-full" />
    //                 <span className="text-white text-sm">Kar Diya</span>
    //             </div>
    //             <div className="bg-pink-400 rounded-3xl p-4 w-48 relative">
    //                 <img
    //                     src={message.storyReply.storyImage}
    //                     alt="Story"
    //                     className="w-full h-60 object-cover rounded-2xl"
    //                 />
    //             </div>
    //             <span className="text-gray-500 text-xs mt-2">{message.timestamp}</span>
    //         </div>
    //     );
    // }

    return (
        <div className={`flex items-end gap-2 mb-3 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
            {!isOwn && (
                <img
                    src="/images/user-1.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full flex-shrink-0"
                />
            )}
            <div
                className={`px-4 py-2 mb-1   max-w-xs ${
                    isOwn ? 'bg-gradient-to-br from-blue-300 via-green-100 to-indigo-300 text-black  rounded-t-xl rounded-l-xl' : 'bg-gray-300 text-black rounded-t-xl rounded-r-xl'
                }`}
            >
                {message.content}
                {message.type === 'reaction' && <span className="ml-1">👍</span>}
            </div>
        </div>
    );
};