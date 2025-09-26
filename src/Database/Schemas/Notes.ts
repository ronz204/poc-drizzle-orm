import { pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const Notes = pgTable("notes", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  content: varchar("content", { length: 2048 }).notNull(),
});
