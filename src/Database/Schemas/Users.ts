import { pgTable, varchar, serial, boolean } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  active: boolean("active").notNull().default(true),
  password: varchar("password", { length: 256 }).notNull(),
});

