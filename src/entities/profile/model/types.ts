import { z } from "zod";

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(["roomer", "groomer"]),
  name: z.string(),
  nickname: z.string(),
  avatar_url: z.string().url(),
  age: z.number(),
  city: CitySchema,
  is_private: z.boolean(),
  telegram: z.string(),
  about: z.string(),
  points: z.number(),
  calling_limit: z.number(),
  going_limit: z.number(),
  account_status: z.enum(["active", "inactive"]),
  last_login_at: z.string().datetime(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type Profile = z.infer<typeof ProfileSchema>;
