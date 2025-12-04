var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection, } from "@mikro-orm/core";
import { UserEntity, CommentEntity } from "./entities.ts";
let PostEntity = class PostEntity {
    id;
    user;
    postedTime;
    posterImage;
    likesCount;
    commentsCount;
    description;
    comments = new Collection(this);
};
__decorate([
    PrimaryKey()
], PostEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], PostEntity.prototype, "user", void 0);
__decorate([
    Property()
], PostEntity.prototype, "postedTime", void 0);
__decorate([
    Property({ nullable: true })
], PostEntity.prototype, "posterImage", void 0);
__decorate([
    Property()
], PostEntity.prototype, "likesCount", void 0);
__decorate([
    Property()
], PostEntity.prototype, "commentsCount", void 0);
__decorate([
    Property({ nullable: true })
], PostEntity.prototype, "description", void 0);
__decorate([
    OneToMany(() => CommentEntity, (comment) => comment.post)
], PostEntity.prototype, "comments", void 0);
PostEntity = __decorate([
    Entity()
], PostEntity);
export { PostEntity };
