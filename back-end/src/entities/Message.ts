import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class Message {
  @PrimaryKey()
  id!: number;

  @Property()
  senderId!: number;

  @Property()
  receiverId!: number;

  @Property()
  content!: string;

  @Property()
  timestamp!: string;

  @Property({ nullable: true })
  imageUrl?: string;

  @Property()
  isRead!: boolean;
}

//
// export interface Message {
//     id: number;
//     senderId: User;
//     receiverId: User;
//     content: string;
//     timestamp: string;
//     isRead: boolean;
//     type: 'text' | 'image' | 'story-reply' | 'reaction';   => this has to be add
//     imageUrl?: string;
//     storyReply?: {                                         => this has to be add
//         storyOwner: string;
//         storyImage: string;
//     };
// }
//
