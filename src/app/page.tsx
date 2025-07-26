import { redirect, RedirectType } from "next/navigation";

export default function Home() {
  redirect("/profile", RedirectType.replace);
  return;
}
