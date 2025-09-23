import { pgTable, integer, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
});
