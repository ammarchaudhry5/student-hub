import React, {useState} from "react";
import {PostDetailModal} from "@/components/PostDetailModal";

interface PostCommentModalPops {
    userProfilePicture: string;
    userName: string;
    comment: string;
    // commentReply: string;
    commentTime: string;
    // isCommentLiked: boolean;
    commentLikesCounts: number;
    commentRepliesCount: number;
}

export function PostCommentModal ({
                                      userProfilePicture,
                                      comment,
                                      // commentReply,
                                      userName,
                                      commentTime,
                                      // isCommentLiked,
                                      commentLikesCounts,
                                      commentRepliesCount,
}: PostCommentModalPops){
    const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(changed => !changed);
        console.log("Like toggled:", !liked);
    };
    return (
      <div>
          <div>
              <div className="flex items-center">
                  <div className="relative w-12 h-12">
                      <div
                          onClick={() => console.log("user profile img clicked")}
                          className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                      >
                          <img
                              src={userProfilePicture}
                              alt="profile image"
                              className="w-full h-full object-cover"
                          />
                      </div>
                  </div>
                  <div>
                      <p
                          className="ml-4 mr-2 text-white text-lg font-semibold leading-tight cursor-pointer"
                          onClick={() => console.log("username clicked")}
                      >
                          {userName}
                      </p>

                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>

                      <p className="text-gray-300 text-base font-normal ml-2 leading-tight">
                          {comment}
                      </p>
                  </div>
                  <div>
                      <img
                          src="/three-dots-horizontal-icon.svg"
                          alt="post details icon"
                          onClick={() => {
                              console.log("open post details modal");
                              setIsPostDetailModalOpen(true)
                          }}
                          className="rounded-full h-8 w-8 p-1 hover:bg-gray-300 cursor-pointer"
                      />
                  </div>
              </div>
              <div className="flex gap-5">
                  <img
                      src={liked ? "/like-filled.svg" : "/like-outlined.svg"}
                      alt="like icon"
                      onClick={toggleLike}
                      className="h-8 w-8 cursor-pointer"
                  />
              </div>
              <PostDetailModal
                  isOpen={isPostDetailModalOpen}
                  onClose={() => {
                      console.log("close post details modal");
                      setIsPostDetailModalOpen(false)
                  }}
              >
              </PostDetailModal>
          </div>
          <div>
              <div>
                  <p className="ml-4 mr-2 text-white text-base font-normal">
                      {commentTime}
                  </p>

                  <p
                      className="text-gray-300 text-base font-normal ml-2 leading-tight cursor-pointer"
                      onClick={() => console.log("comment likes clicked")}
                  >
                      {`${commentLikesCounts} likes`}
                  </p>

                  <p
                      className="text-gray-300 text-base font-normal ml-2 leading-tight cursor-pointer"
                      onClick={() => console.log("comment reply clicked")}
                  >
                      Reply
                  </p>
              </div>
          </div>
          <div>
              <p
                  className="text-gray-300 text-base font-normal ml-2 leading-tight cursor-pointer"
                  onClick={() => console.log("comment reply clicked")}
              >
                  {`__view all ${commentRepliesCount} replies`}
              </p>
          </div>
          <div>

          </div>
      </div>
    );
}