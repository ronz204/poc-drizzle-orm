import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "sqlite",
  schema: "./src/Schemas/*",
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
