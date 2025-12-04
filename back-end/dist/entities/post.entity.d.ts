import { Collection } from "@mikro-orm/core";
import { UserEntity, CommentEntity } from "./entities.ts";
export declare class PostEntity {
    id: number;
    user: UserEntity;
    postedTime: string;
    posterImage?: string;
    likesCount: number;
    commentsCount: number;
    description?: string;
    comments: Collection<CommentEntity, object>;
}
