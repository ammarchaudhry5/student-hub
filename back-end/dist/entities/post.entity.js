var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    PrimaryKey(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    __metadata("design:type", UserEntity)
], PostEntity.prototype, "user", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], PostEntity.prototype, "postedTime", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "posterImage", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], PostEntity.prototype, "likesCount", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], PostEntity.prototype, "commentsCount", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "description", void 0);
__decorate([
    OneToMany(() => CommentEntity, (comment) => comment.post),
    __metadata("design:type", Object)
], PostEntity.prototype, "comments", void 0);
PostEntity = __decorate([
    Entity()
], PostEntity);
export { PostEntity };
