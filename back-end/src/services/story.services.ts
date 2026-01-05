import { DI } from "../app.ts";
import { StoryEntity, UserEntity } from "../entities/entities.ts";

interface CreateStoryInput {
  userId: number;
  username: string;
  profilePicture: string;
  hasNew: boolean;
  isNote?: boolean;
  noteText?: string;
}

export class StoryServices {
  async createStory(data: CreateStoryInput) {
    const em = DI.orm.em.fork();

    const user = await em.findOne(UserEntity, { id: data.userId });
    if (!user) throw new Error("User not found");

    const story = em.create(StoryEntity, {
      user,
      username: data.username,
      profilePicture: data.profilePicture,
      hasNew: data.hasNew,
      isNote: data.isNote || false,
      noteText: data.noteText || "null",
    });

    await em.persistAndFlush(story);

    return {
      id: story.id,
      username: story.username,
      profilePicture: story.profilePicture,
      hasNew: story.hasNew,
      isNote: story.isNote,
      noteText: story.noteText,
    };
  }

  async getAllStories() {
    const em = DI.orm.em.fork();

    const stories = await em.find(StoryEntity, {}, { orderBy: { id: "DESC" } });

    return stories.map((s) => ({
      id: s.id,
      username: s.username,
      profilePicture: s.profilePicture,
      hasNew: s.hasNew,
      isNote: s.isNote,
      noteText: s.noteText,
    }));
  }
}
