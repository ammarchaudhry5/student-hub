import {User} from "@/helpers/types";
import React from "react";

interface SuggestedUserTileProps {
    // key: number;
    user: User
}

export function SuggestedUserTile({
                                   // key,
                                   user,
                               }: SuggestedUserTileProps)
{
    return (
      <div>
          <div className="relative w-12 h-12">
              <div
                  onClick={() => console.log("user profile img clicked")}
                  className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
              >
                  <img
                      src={user.profilePicture}
                      alt="profile image"
                      className="w-full h-full object-cover"
                  />
              </div>
          </div>
      </div>
    );
}