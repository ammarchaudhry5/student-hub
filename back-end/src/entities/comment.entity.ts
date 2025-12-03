import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from "@mikro-orm/core";
import { CommentReplyEntity, PostEntity, UserEntity } from "./entities.ts";

@Entity()
export class CommentEntity {
  @PrimaryKey()
  id!: number;

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

  @Property()
  repliesCount!: number;

  @OneToMany(() => CommentReplyEntity, (r) => r.parentComment)
  replies = new Collection<CommentReplyEntity>(this);
}
