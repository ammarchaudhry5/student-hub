import { Entity, PrimaryKey, Property, ManyToMany, ManyToOne, Collection } from "@mikro-orm/core";
import { NotificationGroupEntity, UserEntity } from "./entities.ts";

@Entity()
export class NotificationItemEntity {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => NotificationGroupEntity)
  group!: NotificationGroupEntity;

  // @ManyToMany(() => UserEntity, (user) => user.notifications)
  // users = new Collection<UserEntity>(this);

  @Property()
  action!: string;

  @Property()
  time!: string;

  @Property({ nullable: true })
  previewImage?: string;

  @Property({ nullable: true })
  followBack?: boolean;
}
