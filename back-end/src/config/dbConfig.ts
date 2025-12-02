import { PostgreSqlDriver, defineConfig } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  driver: PostgreSqlDriver,
  entities: ["./dist/entities/*.js"],
  entitiesTs: ["./src/entities/*.ts"],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  debug: process.env.NODE_ENV !== "production",
  metadataProvider: TsMorphMetadataProvider,
});
