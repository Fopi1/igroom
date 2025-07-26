import { AvatarWithStatus } from "./avatarWithStatus";
import { CityInfo } from "./cityInfo";
import { IgroomInfos } from "./igroomsInfo";
import { Nicknames } from "./nicknames";

export const ProfileHeader = () => {
  return (
    <div className="w-full flex flex-col">
      <AvatarWithStatus />
      <Nicknames />
      <IgroomInfos />
      <CityInfo />
    </div>
  );
};
