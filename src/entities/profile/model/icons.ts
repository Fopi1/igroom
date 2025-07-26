import choto from "$/public/images/choto.svg";
import internet from "$/public/images/internet.svg";
import message from "$/public/images/message.svg";
import notifications from "$/public/images/notifications.svg";
import profile from "$/public/images/profile.svg";
import choto2 from "$/public/images/choto2.svg";
import eye from "$/public/images/eye.svg";
import cat from "$/public/images/cat.svg";
import { TIconButton } from "@/shared/ui/iconButton/types";

export const footerIcons = [choto, internet, message, notifications, profile];

export const aboutIcons: TIconButton[] = [
  { icon: choto2, description: "" },
  { icon: eye, description: "это я" },
  { icon: cat, description: "котум" },
];
