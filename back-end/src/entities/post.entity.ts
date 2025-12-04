import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  OneToMany,
  ManyToMany,
  Collection,
} from "@mikro-orm/core";
import { UserEntity, CommentEntity } from "./entities.ts";

@Entity()
export class PostEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @Property()
  postedTime!: string;

  @Property({ nullable: true })
  posterImage?: string;

  @Property()
  likesCount!: number;

  @Property()
  commentsCount!: number;

  @Property({ nullable: true })
  description?: string;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments = new Collection<CommentEntity>(this);

  // @ManyToMany(() => UserEntity, (user) => user.savedPosts)
  // savedByUsers = new Collection<UserEntity>(this);
}
