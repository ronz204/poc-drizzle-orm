import * as z from "zod";

const Schema = z.object({
  url: z.string().trim(),
});

export const PgConfig = Schema.parse({
  url: process.env.DATABASE_URL,
});
