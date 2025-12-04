import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { Migrator } from "@mikro-orm/migrations";
import dotenv from "dotenv";
dotenv.config();
const config = {
    driver: PostgreSqlDriver,
    extensions: [Migrator],
    entities: ["./dist/entities/*.entity.js"],
    entitiesTs: ["./src/entities/*.entity.ts"],
    migrations: {
        path: "./dist/migrations",
        pathTs: "./src/migrations",
        glob: "!(*.d).{js,ts}",
    },
    seeder: {
        path: "./dist/seeders",
        pathTs: "./src/seeders",
        defaultSeeder: "UserSeeder",
    },
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    debug: process.env.NODE_ENV !== "production",
    metadataProvider: TsMorphMetadataProvider,
};
export default config;
