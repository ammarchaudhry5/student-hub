var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    PrimaryKey(),
    __metadata("design:type", Number)
], MessageEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => ConversationEntity),
    __metadata("design:type", ConversationEntity)
], MessageEntity.prototype, "conversation", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    __metadata("design:type", UserEntity)
], MessageEntity.prototype, "sender", void 0);
__decorate([
    ManyToOne(() => UserEntity),
    __metadata("design:type", UserEntity)
], MessageEntity.prototype, "receiver", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], MessageEntity.prototype, "content", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], MessageEntity.prototype, "timestamp", void 0);
__decorate([
    Property(),
    __metadata("design:type", Boolean)
], MessageEntity.prototype, "isRead", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], MessageEntity.prototype, "type", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], MessageEntity.prototype, "imageUrl", void 0);
__decorate([
    Property({ type: "json", nullable: true }),
    __metadata("design:type", Object)
], MessageEntity.prototype, "storyReply", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", String)
], MessageEntity.prototype, "reactionEmoji", void 0);
MessageEntity = __decorate([
    Entity()
], MessageEntity);
export { MessageEntity };
