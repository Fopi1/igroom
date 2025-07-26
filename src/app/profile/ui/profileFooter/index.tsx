import {
  buttons,
  historyOfMettings,
  infoButtons,
  logoutButton,
  profileButtons,
  telegramButton,
} from "./constants";
import { ButtonEnumerator } from "@/shared/ui/buttonsEnumerator";

export const ProfileFooter = () => {
  return (
    <div className="flex flex-col gap-5">
      <ButtonEnumerator arrayOfButtons={historyOfMettings} />
      <ButtonEnumerator arrayOfButtons={buttons} />
      <ButtonEnumerator arrayOfButtons={profileButtons} />
      <ButtonEnumerator arrayOfButtons={telegramButton} />
      <ButtonEnumerator arrayOfButtons={infoButtons} />
      <ButtonEnumerator arrayOfButtons={logoutButton} />
    </div>
  );
};
