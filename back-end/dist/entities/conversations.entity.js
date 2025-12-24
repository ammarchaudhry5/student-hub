var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";
import { UserEntity, MessageEntity } from "./entities.ts";
let ConversationEntity = class ConversationEntity {
    id;
    user;
    otherUser;
    lastMessage;
    timestamp;
    unreadCount;
    isOnline;
    isMuted;
    hasAttachment;
    reactionEmoji;
    messages = new Collection(this);
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], ConversationEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    __metadata("design:type", UserEntity)
], ConversationEntity.prototype, "user", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    __metadata("design:type", UserEntity)
], ConversationEntity.prototype, "otherUser", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "lastMessage", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], ConversationEntity.prototype, "timestamp", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], ConversationEntity.prototype, "unreadCount", void 0);
__decorate([
    Property(),
    __metadata("design:type", Boolean)
], ConversationEntity.prototype, "isOnline", void 0);
__decorate([
    Property(),
    __metadata("design:type", Boolean)
], ConversationEntity.prototype, "isMuted", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", Boolean)
], ConversationEntity.prototype, "hasAttachment", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], ConversationEntity.prototype, "reactionEmoji", void 0);
__decorate([
    OneToMany(() => MessageEntity, (m) => m.conversation),
    __metadata("design:type", Object)
], ConversationEntity.prototype, "messages", void 0);
ConversationEntity = __decorate([
    Entity()
], ConversationEntity);
export { ConversationEntity };
