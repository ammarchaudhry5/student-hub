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

// export interface NotificationUser {
//     id: number;
//     username: string;
//     profilePicture: string;
// }

export interface NotificationItem {
    id: number;
    users: User[];
    action: string;
    time: string;
    previewImage?: string;
    followBack?: boolean;
}

export interface NotificationGroup {
    title: string;
    list: NotificationItem[];
}

export interface Message {
    id: number;
    senderId: User;
    receiverId: User;
    content: string;
    timestamp: string;
    isRead: boolean;
    type: 'text' | 'image' | 'story-reply' | 'reaction';
    imageUrl?: string;
    storyReply?: {
        storyOwner: string;
        storyImage: string;
    };
}

export interface Conversation {
    id: number;
    userId: User;
    senderUsername: User;
    senderName: User;
    senderUserProfilePicture: User;
    receiverUsername: User;
    receiverName: User;
    receiverUserProfilePicture: User;
    lastMessage: string;
    messages: Message[];
    timestamp: string;
    isOnline: boolean;
    unreadCount: number;
    isMuted: boolean;
    hasAttachment?: boolean;
    reactionEmoji?: string;
}

export interface Story {
    id: number;
    userId: number;
    username: string;
    profilePicture: string;
    hasNew: boolean;
    isNote?: boolean;
    noteText?: string;
}