import { PgConfig } from "@Configs/PgConfig";
import { drizzle } from "drizzle-orm/node-postgres";
export const Drizzle = drizzle(PgConfig.url);
