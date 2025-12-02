import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  userId!: number;

  @Property()
  username!: string;

  @Property({ nullable: true })
  userProfilePicture?: string;

  @Property()
  postedTime!: string;

  @Property()
  posterImage!: string;

  @Property()
  likesCount!: number;

  @Property()
  commentsCount!: string;

  @Property()
  description!: string;

  @Property({ nullable: true })
  comments?: [];
}

//
// export interface Post {
//     id: number;
//     userId: number;
//     username: string;
//     userProfilePicture: string;
//     postedTime: string;
//     posterImage: string;
//     likesCount: number;
//     commentsCount: number;
//     description: string;
//     comments: Comment[];
// }
