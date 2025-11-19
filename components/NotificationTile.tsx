import React from "react";
import { NotificationItem } from "@/helpers/types";

interface NotificationProps {
    item: NotificationItem;
}

export function NotificationTile({ item }: NotificationProps) {
    return (
        <div className="flex justify-between items-center py-3 px-3 hover:bg-gray-100 rounded-xl cursor-pointer">

            <div className="flex gap-3">
                <img
                    src={item.users[0].profilePicture}
                    className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col justify-center">
                    <p className="text-black text-sm font-semibold">
                        {item.users.map(u => u.username).join(", ")}
                        <span className="font-normal"> {item.action}</span>
                    </p>
                    <p className="text-gray-400 text-xs">{item.time}</p>
                </div>
            </div>

            {item.previewImage && (
                <img
                    src={item.previewImage}
                    className="w-12 h-12 rounded-md object-cover"
                />
            )}

            {item.followBack && (
                <button className="bg-blue-600 ml-2 px-4 py-1.5 rounded-lg text-white text-sm">
                    Follow Back
                </button>
            )}
        </div>
    );
}
