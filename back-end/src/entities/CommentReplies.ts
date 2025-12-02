import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class CommentReplies {
  @PrimaryKey()
  id!: number;

  @Property()
  commentId!: number;

  @Property()
  postId!: number;

  @Property()
  userId!: number;

  @Property()
  username!: string;

  @Property({ nullable: true })
  userProfilePicture?: string;

  @Property()
  comment!: string;

  @Property()
  time!: string;

  @Property()
  likesCount!: number;
}
