var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, OneToMany, Collection } from "@mikro-orm/core";
import { PostEntity, StoryEntity, MessageEntity } from "./entities.ts";
let UserEntity = class UserEntity {
    id;
    email;
    username;
    password;
    name;
    profilePicture;
    bio;
    links;
    isLoggedIn;
    token;
    // @ManyToMany(() => UserEntity, (user) => user.followings)
    // followers = new Collection<UserEntity>(this);
    // @ManyToMany(() => UserEntity, (user) => user.followers)
    // followings = new Collection<UserEntity>(this);
    posts = new Collection(this);
    // @ManyToMany(() => PostEntity, (post) => post.savedByUsers)
    // savedPosts = new Collection<PostEntity>(this);
    stories = new Collection(this);
    sentMessages = new Collection(this);
    receivedMessages = new Collection(this);
};
__decorate([
    PrimaryKey()
], UserEntity.prototype, "id", void 0);
__decorate([
    Property()
], UserEntity.prototype, "email", void 0);
__decorate([
    Property()
], UserEntity.prototype, "username", void 0);
__decorate([
    Property()
], UserEntity.prototype, "password", void 0);
__decorate([
    Property()
], UserEntity.prototype, "name", void 0);
__decorate([
    Property({ nullable: true })
], UserEntity.prototype, "profilePicture", void 0);
__decorate([
    Property({ nullable: true })
], UserEntity.prototype, "bio", void 0);
__decorate([
    Property({ type: "json", nullable: true })
], UserEntity.prototype, "links", void 0);
__decorate([
    Property()
], UserEntity.prototype, "isLoggedIn", void 0);
__decorate([
    Property()
], UserEntity.prototype, "token", void 0);
__decorate([
    OneToMany(() => PostEntity, (post) => post.user)
], UserEntity.prototype, "posts", void 0);
__decorate([
    OneToMany(() => StoryEntity, (story) => story.user)
], UserEntity.prototype, "stories", void 0);
__decorate([
    OneToMany(() => MessageEntity, (m) => m.sender)
], UserEntity.prototype, "sentMessages", void 0);
__decorate([
    OneToMany(() => MessageEntity, (m) => m.receiver)
], UserEntity.prototype, "receivedMessages", void 0);
UserEntity = __decorate([
    Entity()
], UserEntity);
export { UserEntity };
