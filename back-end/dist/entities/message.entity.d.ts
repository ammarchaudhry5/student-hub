import { UserEntity, ConversationEntity } from "./entities.ts";
export declare class MessageEntity {
    id: number;
    conversation: ConversationEntity;
    sender: UserEntity;
    receiver: UserEntity;
    content: string;
    timestamp: string;
    isRead: boolean;
    type: string;
    imageUrl?: string;
    storyReply?: {
        storyOwner: string;
        storyImage: string;
    };
    reactionEmoji?: string;
}
