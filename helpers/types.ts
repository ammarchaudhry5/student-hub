export interface User {
    id: number;
    email: string;
    username: string;
    name: string;
    profilePicture: string;
    bio: string;
    links: string[];
    followers: User[];
    followersCount: number;
    followings: User[];
    followingsCount: number;
    posts: Post[];
    postsCount: number;
    savedPosts: Post[];
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