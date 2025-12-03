import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { UserEntity } from "./entities.ts";

@Entity()
export class StoryEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

  @Property()
  username!: string;

  @Property()
  profilePicture!: string;

  @Property()
  hasNew!: boolean;

  @Property({ nullable: true })
  isNote?: boolean;

  @Property({ nullable: true })
  noteText?: string;
}
