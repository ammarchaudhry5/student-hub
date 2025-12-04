import { NotificationGroupEntity } from "./entities.ts";
export declare class NotificationItemEntity {
    id: number;
    group: NotificationGroupEntity;
    action: string;
    time: string;
    previewImage?: string;
    followBack?: boolean;
}
