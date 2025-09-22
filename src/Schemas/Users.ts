import { sqliteTable, int, text } from "drizzle-orm/sqlite-core";

export const Users = sqliteTable("users", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  password: text("password").notNull(),
});
