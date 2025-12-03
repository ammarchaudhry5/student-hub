import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { UserEntity, ConversationEntity } from "./entities.ts";

@Entity()
export class MessageEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => ConversationEntity)
  conversation!: ConversationEntity;

  @ManyToOne(() => UserEntity)
  sender!: UserEntity;

  @ManyToOne(() => UserEntity)
  receiver!: UserEntity;

  @Property()
  content!: string;

  @Property()
  timestamp!: string;

  @Property()
  isRead!: boolean;

  @Property()
  type!: string;

  @Property({ nullable: true })
  imageUrl?: string;

  @Property({ type: "json", nullable: true })
  storyReply?: {
    storyOwner: string;
    storyImage: string;
  };

  @Property({ nullable: true })
  reactionEmoji?: string;
}
