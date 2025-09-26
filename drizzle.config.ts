import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/Database/Schemas/*",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
