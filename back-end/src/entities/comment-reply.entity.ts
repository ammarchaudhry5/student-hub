import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { CommentEntity, UserEntity, PostEntity } from "./entities.ts";

@Entity()
export class CommentReplyEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => CommentEntity)
  parentComment!: CommentEntity;

  @ManyToOne(() => PostEntity)
  post!: PostEntity;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @Property()
  comment!: string;

  @Property()
  time!: string;

  @Property()
  likesCount!: number;
}
