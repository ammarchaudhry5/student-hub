import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class User {
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

  @Property({ nullable: true })
  links?: string[];

  @Property()
  followersCount!: number;

  @Property()
  followingCount!: number;

  @Property()
  postCount!: number;

  // @Property()
  // followers: [];
  // @Property()
  // followers: [];
  // @Property()
  // posts!: [];

  // @Property()
  // savedPosts!: [];
}

// export interface User {
//     id: number;
//     email: string;
//     username: string;
//     name: string;
//     profilePicture: string;
//     bio: string;
//     links: string[];
//     followers: User[];
//     followersCount: number;
//     followings: User[];
//     followingsCount: number;
//     posts: Post[];
//     postsCount: number;
//     savedPosts: Post[];
// }
