import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class Notifications {
  @PrimaryKey()
  id!: number;

  @Property()
  users!: [];

  @Property()
  action!: string;

  @Property()
  time!: string;

  @Property()
  previewImage?: string;

  @Property({ nullable: true })
  followBack?: boolean;
}

// export interface NotificationItem {
//     id: number;
//     users: User[];
//     action: string;
//     time: string;
//     previewImage?: string;
//     followBack?: boolean;
// }
//
