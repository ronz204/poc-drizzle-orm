import { drizzle } from "drizzle-orm/node-postgres";
export const Drizzle = drizzle(process.env.DATABASE_URL!);
