import { ProfileSchema, Profile } from "../model/types";

export async function getProfile(): Promise<Profile> {
  const res = await fetch(
    `https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch profile: ${res.status}`);
  }

  const json = await res.json();

  return ProfileSchema.parse(json.data);
}
