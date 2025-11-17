export interface User {
    id: number;
    name: string;
    profilePicture: string;
}

export interface Post {
    id: number;
    userId: number;
    username: string;
    userProfilePicture: string;
    postedTime: string;
    posterImage: string;
    likesCount: number;
    commentsCount: number;
    description: string;
    comments: Comment[];
}

export interface Comment {
    id: number;
    postId: number;
    userId: number;
    username: string;
    userProfilePicture: string;
    comment: string;
    commentReplies: CommentReplies[]
    time: string;
    likesCount: number;
    repliesCount: number;
}

export interface CommentReplies {
    id: number;
    commentId: number;
    postId: number;
    userId: number;
    username: string;
    userProfilePicture: string;
    comment: string;
    time: string;
    likesCount: number;
}