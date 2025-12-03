import { Entity, PrimaryKey, Property, OneToMany, Collection } from "@mikro-orm/core";
import { NotificationItemEntity } from "./entities.ts";

@Entity()
export class NotificationGroupEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @OneToMany(() => NotificationItemEntity, (item) => item.group)
  list = new Collection<NotificationItemEntity>(this);
}
