import { DI } from "../app.ts";
import { PostEntity, UserEntity, CommentEntity } from "../entities/entities.ts";

export class PostServices {
  // Create post
  async createPost(data: any) {
    const em = DI.orm.em.fork();

    const user = await em.findOne(UserEntity, { id: data.userId });
    if (!user) throw new Error("User not found");

    const post = em.create(PostEntity, {
      user,
      postedTime: data.postedTime,
      posterImage: data.posterImage || null,
      description: data.description || null,
      likesCount: 0,
      commentsCount: 0,
    });

    await em.persistAndFlush(post);

    return this.formatPost(post, []);
  }

  // Get all posts
  async getAllPosts() {
    const em = DI.orm.em.fork();

    const posts = await em.find(
      PostEntity,
      {},
      {
        populate: [
          "user",
          "comments",
          "comments.user",
          "comments.replies",
          "comments.replies.user",
        ],
        orderBy: { id: "DESC" },
      },
    );

    return posts.map((post) => this.formatPost(post, post.comments.getItems()));
  }

  // Get single post
  async getPostById(postId: number) {
    const em = DI.orm.em.fork();

    const post = await em.findOne(
      PostEntity,
      { id: postId },
      {
        populate: [
          "user",
          "comments",
          "comments.user",
          "comments.replies",
          "comments.replies.user",
        ],
      },
    );

    if (!post) throw new Error("Post not found");

    return this.formatPost(post, post.comments.getItems());
  }

  // Delete post
  async deletePost(postId: number) {
    const em = DI.orm.em.fork();

    const post = await em.findOne(PostEntity, { id: postId });
    if (!post) throw new Error("Post not found");

    await em.removeAndFlush(post);
  }

  // FORMATTER
  private formatPost(post: any, comments: CommentEntity[]) {
    return {
      id: post.id,
      userId: post.user.id,
      username: post.user.username,
      userProfilePicture: post.user.profilePicture,
      postedTime: post.postedTime,
      posterImage: post.posterImage,
      likesCount: post.likesCount,
      commentsCount: post.commentsCount,
      description: post.description,

      comments:
        comments.length > 0
          ? comments.map((c) => {
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
            })
          : [],
    };
  }
}
