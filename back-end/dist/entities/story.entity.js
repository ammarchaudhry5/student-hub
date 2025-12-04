var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { UserEntity } from "./entities.ts";
let StoryEntity = class StoryEntity {
    id;
    user;
    username;
    profilePicture;
    hasNew;
    isNote;
    noteText;
};
__decorate([
    PrimaryKey()
], StoryEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => UserEntity)
], StoryEntity.prototype, "user", void 0);
__decorate([
    Property()
], StoryEntity.prototype, "username", void 0);
__decorate([
    Property()
], StoryEntity.prototype, "profilePicture", void 0);
__decorate([
    Property()
], StoryEntity.prototype, "hasNew", void 0);
__decorate([
    Property({ nullable: true })
], StoryEntity.prototype, "isNote", void 0);
__decorate([
    Property({ nullable: true })
], StoryEntity.prototype, "noteText", void 0);
StoryEntity = __decorate([
    Entity()
], StoryEntity);
export { StoryEntity };
