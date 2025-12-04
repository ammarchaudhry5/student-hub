import { Collection } from "@mikro-orm/core";
import { CommentReplyEntity, PostEntity, UserEntity } from "./entities.ts";
export declare class CommentEntity {
    id: number;
    post: PostEntity;
    user: UserEntity;
    comment: string;
    time: string;
    likesCount: number;
    repliesCount: number;
    replies: Collection<CommentReplyEntity, object>;
}
