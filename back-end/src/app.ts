import express from "express";
import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/postgresql";
import config from "./mikro-orm.config.ts";
import authRoutes from "./routes/auth.routes.ts";
import cors from "cors";

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

  app.use("/auth", authRoutes);

  app.get("/", (_, res) => res.send("API is working!"));
  // app.post("/test", (req, res) => {
  //   console.log(req.body);
  //   res.json(req.body);
  //   res.send("API is working!");
  // });

  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})();
