import { drizzle } from "drizzle-orm/libsql";
export const Drizzle = drizzle(process.env.DB_FILE_NAME!);
