import express from "express";
import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/postgresql";
import config from "./mikro-orm.config.ts";
import authRoutes from "./routes/auth.routes.ts";
import cors from "cors";
import profileRoutes from "./routes/profile.routes.ts";
import postRoutes from "./routes/post.routes.ts";
import commentRoutes from "./routes/comment.routes.ts";
import commentReplyRoutes from "./routes/commentReply.routes.ts";
import storyRoutes from "./routes/story.routes.ts";
import checkRoutes from "./routes/check.routes.ts";

dotenv.config();

export const DI = {} as { orm: MikroORM };

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

let PORT;
if (process.env.NODE_ENV === "production") {
  PORT = process.env.PROD_PORT || 5000;
} else {
  PORT = process.env.DEV_PORT || 5000;
}

(async () => {
  DI.orm = await MikroORM.init(config);

  app.use("/check", checkRoutes);

  app.use("/auth", authRoutes);

  app.use("/profile", profileRoutes);

  app.use("/posts", postRoutes);

  app.use("/comments", commentRoutes);

  app.use("/comment-replies", commentReplyRoutes);

  app.use("/story", storyRoutes);

  app.listen(PORT, () =>
    console.log(`==============>>> Server running on port ${PORT} <<<==============`),
  );
})();
