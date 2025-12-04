var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { UserEntity, ConversationEntity } from "./entities.ts";
let MessageEntity = class MessageEntity {
    id;
    conversation;
    sender;
    receiver;
    content;
    timestamp;
    isRead;
    type;
    imageUrl;
    storyReply;
    reactionEmoji;
};
__decorate([
    PrimaryKey()
], MessageEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => ConversationEntity)
], MessageEntity.prototype, "conversation", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], MessageEntity.prototype, "sender", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], MessageEntity.prototype, "receiver", void 0);
__decorate([
    Property()
], MessageEntity.prototype, "content", void 0);
__decorate([
    Property()
], MessageEntity.prototype, "timestamp", void 0);
__decorate([
    Property()
], MessageEntity.prototype, "isRead", void 0);
__decorate([
    Property()
], MessageEntity.prototype, "type", void 0);
__decorate([
    Property({ nullable: true })
], MessageEntity.prototype, "imageUrl", void 0);
__decorate([
    Property({ type: "json", nullable: true })
], MessageEntity.prototype, "storyReply", void 0);
__decorate([
    Property({ nullable: true })
], MessageEntity.prototype, "reactionEmoji", void 0);
MessageEntity = __decorate([
    Entity()
], MessageEntity);
export { MessageEntity };
