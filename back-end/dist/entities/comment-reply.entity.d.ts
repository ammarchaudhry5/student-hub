import { CommentEntity, UserEntity, PostEntity } from "./entities.ts";
export declare class CommentReplyEntity {
    id: number;
    parentComment: CommentEntity;
    post: PostEntity;
    user: UserEntity;
    comment: string;
    time: string;
    likesCount: number;
}
