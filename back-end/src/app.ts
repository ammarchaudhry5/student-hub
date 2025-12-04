import express from "express";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth.routes.ts";
// import { MikroORM } from "@mikro-orm/postgresql";
// import config from "./mikro-orm.config";
dotenv.config();

const app = express();

let PORT;
process.env.NODE_ENV === "production"
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT);
(async () => {
  // Initialize ORM
  // const orm = await MikroORM.init(config);

  // if (process.env.NODE_ENV !== "production") {
  //   // Only in development: create DB/tables automatically
  //   // const generator = orm.getSchemaGenerator();
  //   // await generator.ensureDatabase(); // creates DB if it doesn't exist
  //   // await generator.updateSchema(); // creates/updates tables from entities
  //   console.log("✅ Database and tables ensured (dev only).");
  // } else {
  //   console.log("⚠️ Production mode: skipping schema generation, use migrations.");
  // }

  // app.use("/auth", authRoutes);

  app.get("/", (req, res) => {
    res.send("API is working!");
  });

  app.get("/hello", (req, res) => {
    res.json({ message: "Hello from Express + MikroORM!" });
  });

  app.post("/test", (req, res) => {
    res.json({
      message: "You sent:",
      body: req.body,
    });
  });

  // Start server
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})();
