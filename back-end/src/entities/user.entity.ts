import { Entity, PrimaryKey, Property, ManyToMany, OneToMany, Collection } from "@mikro-orm/core";
import { PostEntity, StoryEntity, MessageEntity, NotificationItemEntity } from "./entities.ts";

@Entity()
export class UserEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  email!: string;

  @Property()
  username!: string;

  @Property()
  name!: string;

  @Property({ nullable: true })
  profilePicture?: string;

  @Property({ nullable: true })
  bio?: string;

  @Property({ type: "json", nullable: true })
  links?: string[];

  @ManyToMany(() => UserEntity, (user) => user.followings)
  followers = new Collection<UserEntity>(this);

  @ManyToMany(() => UserEntity, (user) => user.followers)
  followings = new Collection<UserEntity>(this);

  @OneToMany(() => PostEntity, (post) => post.user)
  posts = new Collection<PostEntity>(this);

  @ManyToMany(() => PostEntity, (post) => post.savedByUsers)
  savedPosts = new Collection<PostEntity>(this);

  @OneToMany(() => StoryEntity, (story) => story.user)
  stories = new Collection<StoryEntity>(this);

  @OneToMany(() => MessageEntity, (m) => m.sender)
  sentMessages = new Collection<MessageEntity>(this);

  @OneToMany(() => MessageEntity, (m) => m.receiver)
  receivedMessages = new Collection<MessageEntity>(this);

  @ManyToMany(() => NotificationItemEntity, (item) => item.users)
  notifications = new Collection<NotificationItemEntity>(this);
}
