import { DI } from "../app.ts";
import { UserEntity } from "../entities/user.entity.ts";

interface UpdateProfileInput {
  name?: string;
  bio?: string;
  profilePicture?: string;
  links?: string[];
}

export class ProfileServices {
  // Get profile by user ID
  async getProfileById(userId: number) {
    const em = DI.orm.em.fork();

    const user = await em.findOne(UserEntity, { id: userId });
    if (!user) throw new Error("User not found");

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      profilePicture: user.profilePicture,
      bio: user.bio,
      links: user.links,
    };
  }

  // Get profile by username (public)
  async getProfileByUsername(username: string) {
    const em = DI.orm.em.fork();

    const user = await em.findOne(UserEntity, { username });
    if (!user) throw new Error("Profile not found");

    return {
      id: user.id,
      username: user.username,
      name: user.name,
      profilePicture: user.profilePicture,
      bio: user.bio,
      links: user.links,
    };
  }

  // Update profile
  async updateProfile(userId: number, data: UpdateProfileInput) {
    const em = DI.orm.em.fork();

    const user = await em.findOne(UserEntity, { id: userId });
    if (!user) throw new Error("User not found");

    if (data.name !== undefined) user.name = data.name;
    if (data.bio !== undefined) user.bio = data.bio;
    if (data.profilePicture !== undefined) user.profilePicture = data.profilePicture;
    if (data.links !== undefined) user.links = data.links;

    await em.persistAndFlush(user);

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      profilePicture: user.profilePicture,
      bio: user.bio,
      links: user.links,
    };
  }
}
