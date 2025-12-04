var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";
import { CommentReplyEntity, PostEntity, UserEntity } from "./entities.ts";
let CommentEntity = class CommentEntity {
    id;
    post;
    user;
    comment;
    time;
    likesCount;
    repliesCount;
    replies = new Collection(this);
};
__decorate([
    PrimaryKey()
], CommentEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => PostEntity)
], CommentEntity.prototype, "post", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    Property()
], CommentEntity.prototype, "comment", void 0);
__decorate([
    Property()
], CommentEntity.prototype, "time", void 0);
__decorate([
    Property()
], CommentEntity.prototype, "likesCount", void 0);
__decorate([
    Property()
], CommentEntity.prototype, "repliesCount", void 0);
__decorate([
    OneToMany(() => CommentReplyEntity, (r) => r.parentComment)
], CommentEntity.prototype, "replies", void 0);
CommentEntity = __decorate([
    Entity()
], CommentEntity);
export { CommentEntity };
