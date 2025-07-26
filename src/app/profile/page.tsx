import { ProfileFooter } from "./ui/profileFooter";
import { ProfileHeader } from "./ui/profileHeader";
import { ProfileMain } from "./ui/profileMain";

export default async function ProfilePage() {
  return (
    <div className="w-full bg-[var(--background)]">
      <div className="px-3 py-5 flex flex-col gap-3">
        <ProfileHeader />
        <ProfileMain />
        <ProfileFooter />
      </div>
    </div>
  );
}
