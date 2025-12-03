import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";
import { UserEntity, MessageEntity } from "./entities.ts";

@Entity()
export class ConversationEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @ManyToOne(() => UserEntity)
  otherUser!: UserEntity;

  @Property({ nullable: true })
  lastMessage?: string;

  @Property()
  timestamp!: string;

  @Property()
  unreadCount!: number;

  @Property()
  isOnline!: boolean;

  @Property()
  isMuted!: boolean;

  @Property({ nullable: true })
  hasAttachment?: boolean;

  @Property({ nullable: true })
  reactionEmoji?: string;

  @OneToMany(() => MessageEntity, (m) => m.conversation)
  messages = new Collection<MessageEntity>(this);
}
