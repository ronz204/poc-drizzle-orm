import { pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

