import { footerIcons } from "@/entities/profile/model";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-[var(--background)]">
      <div className="p-5 flex items-center justify-between">
        {footerIcons.map((icon, index) => (
          <Image
            className="cursor-pointer"
            src={icon}
            alt="image"
            key={index}
            height={0}
            width={0}
          />
        ))}
      </div>
    </footer>
  );
};
