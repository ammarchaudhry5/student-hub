import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class Conversations {
  @PrimaryKey()
  id!: number;

  @Property()
  userId!: number;

  @Property()
  senderUsername!: string;

  @Property()
  senderName!: string;

  @Property({ nullable: true })
  senderUserProfilePicture?: string;

  @Property()
  receiverUsername!: string;

  @Property()
  receiverName!: string;

  @Property({ nullable: true })
  receiverUserProfilePicture?: string;

  @Property()
  lastMessage!: string;

  @Property()
  message!: [];

  @Property()
  timestamp!: string;

  @Property()
  isOnline!: boolean;

  @Property()
  unreadCount!: number;

  @Property()
  isMuted!: boolean;

  @Property()
  hasAttachment!: boolean;

  @Property({ nullable: true })
  reactionEmoji?: string;
}

// export interface Conversation {
//     id: number;
//     userId: User;
//     senderUsername: User;
//     senderName: User;
//     senderUserProfilePicture: User;
//     receiverUsername: User;
//     receiverName: User;
//     receiverUserProfilePicture: User;
//     lastMessage: string;
//     messages: Message[];
//     timestamp: string;
//     isOnline: boolean;
//     unreadCount: number;
//     isMuted: boolean;
//     hasAttachment?: boolean;
//     reactionEmoji?: string;
// }
//
