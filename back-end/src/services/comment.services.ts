import { DI } from "../app.ts";
import { CommentEntity, PostEntity, UserEntity } from "../entities/entities.ts";

interface CreateCommentInput {
  postId: number;
  userId: number;
  comment: string;
  time: string;
}

export class CommentServices {
  async createComment(data: CreateCommentInput) {
    const em = DI.orm.em.fork();

    const post = await em.findOne(PostEntity, { id: data.postId });
    if (!post) throw new Error("Post not found");

    const user = await em.findOne(UserEntity, { id: data.userId });
    if (!user) throw new Error("User not found");

    const comment = em.create(CommentEntity, {
      post,
      user,
      comment: data.comment,
      time: data.time,
      likesCount: 0,
      repliesCount: 0,
    });

    post.commentsCount += 1;

    await em.persistAndFlush([comment, post]);

    return {
      id: comment.id,
      comment: comment.comment,
      time: comment.time,
      likesCount: comment.likesCount,
      repliesCount: comment.repliesCount,
      user: {
        id: user.id,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    };
  }

  async getCommentsByPost(postId: number) {
    const em = DI.orm.em.fork();

    const comments = await em.find(
      CommentEntity,
      { post: postId },
      {
        populate: ["user", "replies", "replies.user"],
        orderBy: { id: "ASC" },
      },
    );

    return comments.map((c) => {
      const baseComment: any = {
        id: c.id,
        comment: c.comment,
        time: c.time,
        likesCount: c.likesCount,
        repliesCount: c.repliesCount,
        user: {
          id: c.user.id,
          username: c.user.username,
          profilePicture: c.user.profilePicture,
        },
      };

      // replies if they exist
      if (c.repliesCount > 0 && c.replies.length > 0) {
        baseComment.replies = c.replies.getItems().map((r) => ({
          id: r.id,
          comment: r.comment,
          time: r.time,
          likesCount: r.likesCount,
          user: {
            id: r.user.id,
            username: r.user.username,
            profilePicture: r.user.profilePicture,
          },
        }));
      }

      return baseComment;
    });
  }
}
