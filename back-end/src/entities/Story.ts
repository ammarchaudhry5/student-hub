import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity()
export class Story {
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

  @Property()
  hasNew!: boolean;

  @Property({ nullable: true })
  isNote?: boolean;

  @Property()
  noteText?: string;
}

// export interface Story {
//     id: number;
//     userId: number;
//     username: string;
//     profilePicture: string;
//     hasNew: boolean;
//     isNote?: boolean;
//     noteText?: string;
// }
