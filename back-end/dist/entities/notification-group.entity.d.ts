import { Collection } from "@mikro-orm/core";
import { NotificationItemEntity } from "./entities.ts";
export declare class NotificationGroupEntity {
    id: number;
    title: string;
    list: Collection<NotificationItemEntity, object>;
}
