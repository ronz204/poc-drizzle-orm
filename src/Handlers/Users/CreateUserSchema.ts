import * as z from "zod";

export const CreateUserSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  password: z.string().min(6).max(100).trim(),
});

export type CreateUserCommand = z.infer<typeof CreateUserSchema>;
export type CreateUserResponse = { id: number; name: string; };
