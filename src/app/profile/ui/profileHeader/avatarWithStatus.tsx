import { aboutIcons } from "@/entities/profile/model";
import { ChevronLeft } from "lucide-react";
import profilePicture from "$/public/images/profile.png";
import Image from "next/image";

export const AvatarWithStatus = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto]">
      <ChevronLeft size={36} strokeWidth={2} className="cursor-pointer" />
      <div className="w-full">
        <div className="max-w-40 mx-auto relative">
          <div className="absolute top-3 left-3 w-1/6 h-1/6 bg-green-500 rounded-full text-center text-black text-xl font-bold">
            P
          </div>
          <Image
            src={profilePicture}
            className="rounded-full"
            alt="profile picture"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mr-2">
        {aboutIcons.map((iconInfo, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <Image src={iconInfo.icon} alt="cool icon" />
              <span className="capitalize">{iconInfo.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
