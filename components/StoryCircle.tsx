import {Story} from "@/helpers/types";
import React from "react";

export const StoryCircle: React.FC<{ story: Story }> = ({ story }) => (
    <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className={`relative ${story.hasNew ? 'p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full' : ''}`}>
            <div className="bg-black p-0.5 rounded-full">
                <img
                    src={story.profilePicture}
                    alt={story.username}
                    className="w-14 h-14 rounded-full object-cover"
                />
            </div>
            {story.isNote && (
                <div className="absolute -bottom-1 -right-1 bg-gray-700 rounded-full p-1">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-[8px]">
                        ♪
                    </div>
                </div>
            )}
        </div>
        <span className="text-xs text-gray-300 max-w-[70px] truncate">{story.username}</span>
    </div>
);