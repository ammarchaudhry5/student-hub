var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { NotificationGroupEntity } from "./entities.ts";
let NotificationItemEntity = class NotificationItemEntity {
    id;
    group;
    // @ManyToMany(() => UserEntity, (user) => user.notifications)
    // users = new Collection<UserEntity>(this);
    action;
    time;
    previewImage;
    followBack;
};
__decorate([
    PrimaryKey()
], NotificationItemEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => NotificationGroupEntity)
], NotificationItemEntity.prototype, "group", void 0);
__decorate([
    Property()
], NotificationItemEntity.prototype, "action", void 0);
__decorate([
    Property()
], NotificationItemEntity.prototype, "time", void 0);
__decorate([
    Property({ nullable: true })
], NotificationItemEntity.prototype, "previewImage", void 0);
__decorate([
    Property({ nullable: true })
], NotificationItemEntity.prototype, "followBack", void 0);
NotificationItemEntity = __decorate([
    Entity()
], NotificationItemEntity);
export { NotificationItemEntity };
