import { DI } from "../app.ts";
import { CommentReplyEntity, CommentEntity, PostEntity, UserEntity } from "../entities/entities.ts";

interface CreateReplyInput {
  commentId: number;
  postId: number;
  userId: number;
  comment: string;
  time: string;
}

export class CommentReplyServices {
  async createReply(data: CreateReplyInput) {
    const em = DI.orm.em.fork();

    const parentComment = await em.findOne(CommentEntity, { id: data.commentId });
    if (!parentComment) throw new Error("Comment not found");

    const post = await em.findOne(PostEntity, { id: data.postId });
    if (!post) throw new Error("Post not found");

    const user = await em.findOne(UserEntity, { id: data.userId });
    if (!user) throw new Error("User not found");

    const reply = em.create(CommentReplyEntity, {
      parentComment,
      post,
      user,
      comment: data.comment,
      time: data.time,
      likesCount: 0,
    });

    parentComment.repliesCount += 1;

    await em.persistAndFlush([reply, parentComment]);

    return {
      id: reply.id,
      comment: reply.comment,
      time: reply.time,
      likesCount: reply.likesCount,
      user: {
        id: user.id,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    };
  }

  async getRepliesByComment(commentId: number) {
    const em = DI.orm.em.fork();

    const replies = await em.find(
      CommentReplyEntity,
      { parentComment: commentId },
      { populate: ["user"], orderBy: { id: "ASC" } },
    );

    return replies.map((r) => ({
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
}
