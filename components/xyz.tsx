// import React, { useState } from "react";
// import {PostDetailModal} from "@/components/PostDetailModal";
// import {PostCommentModal} from "@/components/PostCommentModal";
// import {Post, User, Comment} from "@/helpers/types";
//
// interface PostCardProps {
//     user: User
//     post:Post
//     comment: Comment
// }
//
// export function PostCard({
//                              post,
//                              user,
//                              comment,
//                          }: PostCardProps) {
//
//     const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false);
//     const [liked, setLiked] = useState(false);
//     const [isPostCommentModalOpen, setIsPostCommentModalOpen] = useState(false);
//     const [saved, setSaved] = useState(false);
//
//     const toggleLike = () => {
//         setLiked(changed => !changed);
//         console.log("Like toggled:", !liked);
//     };
//
//     const toggleSave = () => {
//         setSaved(changed => !changed);
//         console.log("Save toggled:", !saved);
//     };
//
//     return (
//         <div>
//             <div className="flex justify-between items-center ml-3 mr-2">
//                 <div className="flex items-center">
//                     <div className="relative w-12 h-12">
//                         <div
//                             onClick={() => console.log("user profile img clicked")}
//                             className="border-2 border-blue-500 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
//                         >
//                             <img
//                                 src={user.profilePicture}
//                                 alt="profile image"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//
//                     <p
//                         className="ml-4 mr-2 text-white text-lg font-semibold leading-tight cursor-pointer"
//                         onClick={() => console.log("username clicked")}
//                     >
//                         {user.name}
//                     </p>
//
//                     <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
//
//                     <p className="text-gray-300 text-base font-normal ml-2 leading-tight">
//                         {post.postedTime}
//                     </p>
//                 </div>
//
//                 <div>
//                     <img
//                         src="/three-dots-horizontal-icon.svg"
//                         alt="post details icon"
//                         onClick={() => {
//                             console.log("open post details modal");
//                             setIsPostDetailModalOpen(true)
//                         }}
//                         className="rounded-full h-8 w-8 p-1 hover:bg-gray-300 cursor-pointer"
//                     />
//                 </div>
//             </div>
//
//             <div>
//                 <img
//                     src={post.posterImage}
//                     alt="feed picture"
//                     className="object-cover rounded-md border-1 border-gray-400 my-3"
//                     onDoubleClick={() => console.log("post double clicked")}
//                 />
//             </div>
//
//             <div className="flex justify-between mx-4">
//                 <div className="flex gap-5">
//                     <img
//                         src={liked ? "/like-filled.svg" : "/like-outlined.svg"}
//                         alt="like icon"
//                         onClick={toggleLike}
//                         className="h-8 w-8 cursor-pointer"
//                     />
//
//                     <img
//                         src="/comment-outlined.svg"
//                         alt="comment icon"
//                         onClick={() => {
//                             console.log("post comment button clicked")
//                             setIsPostCommentModalOpen(true)
//                         }}
//                         className="h-7 w-7 cursor-pointer"
//                     />
//
//                     <img
//                         src="/share-outlined.svg"
//                         alt="share icon"
//                         onClick={() => console.log("post share button clicked")}
//                         className="h-7 w-7 cursor-pointer"
//                     />
//                 </div>
//
//                 <div className="flex gap-5">
//                     <img
//                         src={saved ? "/save-filled.svg" : "/save-outlined.svg"}
//                         alt="save icon"
//                         onClick= {toggleSave}
//                         className="h-7 w-7 cursor-pointer"
//                     />
//                 </div>
//             </div>
//
//             <div className="flex my-1 mx-4">
//                 <p className="text-base font-semibold text-white">{post.likesCount} likes</p>
//             </div>
//
//             <div className="flex my-1 mx-4">
//                 <p className="text-base font-semibold text-white">{post.username}</p>
//                 <p className="text-base font-medium text-white ml-2">{post.description}</p>
//             </div>
//
//             <div className="flex my-1 mx-4">
//                 <p className="text-sm font-normal text-gray-300">
//                     View all {post.commentsCount} comments
//                 </p>
//             </div>
//
//             <div className="flex my-1 mx-4">
//                 <p className="text-sm font-normal text-gray-300">
//                     Add a comment...
//                 </p>
//             </div>
//             <PostDetailModal
//                 isOpen={isPostDetailModalOpen}
//                 onClose={() => {
//                     console.log("close post details modal");
//                     setIsPostDetailModalOpen(false)
//                 }}
//             ></PostDetailModal>
//             <PostCommentModal
//                 isOpen={isPostCommentModalOpen}
//                 onClose={() => {
//                     console.log("close post comment modal");
//                     setIsPostCommentModalOpen(false)
//                 }}
//                 userProfilePicture={comment.userProfilePicture}
//                 userName={comment.username}
//                 comment={comment.comment}
//                 commentTime={comment.time}
//                 commentLikesCounts={comment.likesCount}
//                 commentRepliesCount={comment.repliesCount}
//             ></PostCommentModal>
//         </div>
//     );
// }