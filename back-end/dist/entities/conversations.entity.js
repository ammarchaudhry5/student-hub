var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    PrimaryKey()
], ConversationEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], ConversationEntity.prototype, "user", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], ConversationEntity.prototype, "otherUser", void 0);
__decorate([
    Property({ nullable: true })
], ConversationEntity.prototype, "lastMessage", void 0);
__decorate([
    Property()
], ConversationEntity.prototype, "timestamp", void 0);
__decorate([
    Property()
], ConversationEntity.prototype, "unreadCount", void 0);
__decorate([
    Property()
], ConversationEntity.prototype, "isOnline", void 0);
__decorate([
    Property()
], ConversationEntity.prototype, "isMuted", void 0);
__decorate([
    Property({ nullable: true })
], ConversationEntity.prototype, "hasAttachment", void 0);
__decorate([
    Property({ nullable: true })
], ConversationEntity.prototype, "reactionEmoji", void 0);
__decorate([
    OneToMany(() => MessageEntity, (m) => m.conversation)
], ConversationEntity.prototype, "messages", void 0);
ConversationEntity = __decorate([
    Entity()
], ConversationEntity);
export { ConversationEntity };
