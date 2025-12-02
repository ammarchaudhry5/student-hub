import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class NotificationUser {
  @PrimaryKey()
  id!: number;

  @Property()
  userId!: number;

  @Property()
  username!: string;

  @Property({ nullable: true })
  userProfilePicture?: string;
}

// export interface NotificationUser {
//     id: number;
//     username: string;
//     profilePicture: string;
// }

// export interface NotificationGroup {                     => this has to be add
//     title: string;
//     list: NotificationItem[];
// }
