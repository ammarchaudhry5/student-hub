import { Collection } from "@mikro-orm/core";
import { UserEntity, MessageEntity } from "./entities.ts";
export declare class ConversationEntity {
    id: number;
    user: UserEntity;
    otherUser: UserEntity;
    lastMessage?: string;
    timestamp: string;
    unreadCount: number;
    isOnline: boolean;
    isMuted: boolean;
    hasAttachment?: boolean;
    reactionEmoji?: string;
    messages: Collection<MessageEntity, object>;
}
