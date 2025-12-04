import { UserEntity } from "./entities.ts";
export declare class StoryEntity {
    id: number;
    user: UserEntity;
    username: string;
    profilePicture: string;
    hasNew: boolean;
    isNote?: boolean;
    noteText?: string;
}
