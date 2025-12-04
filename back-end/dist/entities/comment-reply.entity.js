var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { CommentEntity, UserEntity, PostEntity } from "./entities.ts";
let CommentReplyEntity = class CommentReplyEntity {
    id;
    parentComment;
    post;
    user;
    comment;
    time;
    likesCount;
};
__decorate([
    PrimaryKey()
], CommentReplyEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => CommentEntity)
], CommentReplyEntity.prototype, "parentComment", void 0);
__decorate([
    ManyToOne(() => PostEntity)
], CommentReplyEntity.prototype, "post", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], CommentReplyEntity.prototype, "user", void 0);
__decorate([
    Property()
], CommentReplyEntity.prototype, "comment", void 0);
__decorate([
    Property()
], CommentReplyEntity.prototype, "time", void 0);
__decorate([
    Property()
], CommentReplyEntity.prototype, "likesCount", void 0);
CommentReplyEntity = __decorate([
    Entity()
], CommentReplyEntity);
export { CommentReplyEntity };
