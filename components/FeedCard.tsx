import React from "react"

interface FeedCardProps {
    userImage: string;
    userName: string;
    postedTime: string;
    poster: string;
    // isLiked: boolean;
    // isSaved: boolean;
    likesCount: number;
    description: string;
    // commentsCount: number;
    // onUserNameImageClick: ()=>void;
    // onPostDoubleClick: ()=>void;
    // onLikeClick: ()=>void;
    // onCommentClick: ()=>void;
    // onSaveClick: ()=>void;
    // onShareClick: ()=>void;
}

export function FeedCard({
                             userImage,
                             userName,
                             postedTime,
                             poster,
                             // isLiked,
                             // isSaved,
                             likesCount,
                             description,
                             // commentsCount,
                             // onUserNameImageClick,
                             // onPostDoubleClick,
                             // onLikeClick,
                             // onCommentClick,
                             // onSaveClick,
                             // onShareClick,
}: FeedCardProps) {
    return <div>
        <div className="flex justify-between items-center ml-3 mr-2">
            <div className="flex items-center">
                <div className="relative w-12 h-12">
                    <div
                        onClick={() => console.log("user profile img clicked")}
                        className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src={userImage}
                            alt="profile image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <p
                    className="ml-5 mr-2 text-white text-base font-semibold leading-tight cursor-pointer"
                    onClick={() => console.log("username clicked")}
                >
                    {userName}
                </p>
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mx-2"></div>
                <p className="text-gray-300 text-base font-medium leading-tight">
                    {postedTime}
                </p>
            </div>
            <div>
                <img
                    src="/three-dots-horizontal-icon.svg"
                    alt="post details icon"
                    onClick={() => console.log("post details icon")}
                    className="rounded-full h-8 w-8 p-1 hover:bg-gray-300 cursor-pointer"
                />
            </div>
        </div>
        <div>
            <img
                src={poster}
                alt="my feed picture"
                className=" object-cover rounded-md border-1 border-gray-400 my-3"
                onDoubleClick={() => console.log("post double clicked")}
            />
        </div>
        <div className="flex justify-between mx-4">
            <div className="flex gap-5">
                <img
                    src="/like-outlined.svg"
                    alt="like icon"
                    onClick={() => console.log("post like button clicked")}
                    className="h-8 w-8"
                />
                <img
                    src="/comment-outlined.svg"
                    alt="comment icon"
                    onClick={() => console.log("post comment button clicked")}
                    className="h-7 w-7"
                />
                <img
                    src="/share-outlined.svg"
                    alt="share icon"
                    onClick={() => console.log("post share button clicked")}
                    className="h-7 w-7"
                />
            </div>
            <div className="flex gap-5">
                <img
                    src="/save-outlined.svg"
                    alt="save icon"
                    onClick={() => console.log("post save button clicked")}
                    className="h-7 w-7"
                />
            </div>
        </div>
        <div className="flex my-1 mx-4">
            <p className="text-base font-semibold">{`${likesCount} likes`}</p>
        </div>
        <div className=" flex my-1 mx-4">
            <p className="text-base font-semibold">{userName}</p>
            <p className="text-base font-medium ml-2">{description}</p>
        </div>
    </div>
}