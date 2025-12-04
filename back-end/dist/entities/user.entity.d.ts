import { Collection } from "@mikro-orm/core";
import { PostEntity, StoryEntity, MessageEntity } from "./entities.ts";
export declare class UserEntity {
    id: number;
    email: string;
    username: string;
    password: string;
    name: string;
    profilePicture?: string;
    bio?: string;
    links?: string[];
    isLoggedIn: boolean;
    token: string;
    posts: Collection<PostEntity, object>;
    stories: Collection<StoryEntity, object>;
    sentMessages: Collection<MessageEntity, object>;
    receivedMessages: Collection<MessageEntity, object>;
}
