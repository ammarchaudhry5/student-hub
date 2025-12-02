import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity({ tableName: "comments" })
export class Comment {
  @PrimaryKey()
  id!: number;

  @Property()
  postId!: number;

  @Property()
  userId!: number;

  @Property()
  username!: string;

  @Property()
  userProfilePicture?: string;

  @Property()
  comment!: string;

  @Property()
  commentReplies!: [];

  @Property()
  time!: string;

  @Property()
  likesCount!: number;

  @Property()
  repliesCount!: string;
}
