import {User} from "@/helpers/types";
import React from "react";

interface SuggestedUserTileProps {
    // key: number;
    user: User;
}

export function SuggestedUserTile({ user }: SuggestedUserTileProps) {
    return (
        <div className="flex items-center w-full justify-between py-2">

            <div className="flex items-center gap-3">

                <div className="w-12 h-12">
                    <div
                        onClick={() => console.log("user profile img clicked")}
                        className="border-2 border-blue-500 rounded-full w-full h-full overflow-hidden cursor-pointer"
                    >
                        <img
                            src={user.profilePicture}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-black">
                        {user.name}
                    </p>

                    {user.followers?.length ? (
                        <p className="text-xs text-gray-400">
                            Followed by {user.followers[0].name}
                        </p>
                    ) : (
                        <p className="text-xs text-gray-400">Suggested for you</p>
                    )}
                </div>
            </div>

            <button className="bg-blue-600 text-white ml-7 px-4 py-1.5 rounded-lg font-semibold text-sm">
                Follow
            </button>
        </div>
    );
}
