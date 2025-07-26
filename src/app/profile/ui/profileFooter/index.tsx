import { StackList } from "@/shared/ui/stackList";
import {
  buttons,
  historyOfMettings,
  infoButtons,
  logoutButton,
  profileButtons,
} from "./constants";
import { ButtonEnumerator } from "@/shared/ui/buttonsEnumerator";
import { AboutMe } from "./aboutMe";

export const ProfileFooter = () => {
  return (
    <div className="flex flex-col gap-5">
      <ButtonEnumerator arrayOfButtons={historyOfMettings} />
      <ButtonEnumerator arrayOfButtons={buttons} />
      <ButtonEnumerator arrayOfButtons={profileButtons} />
      <AboutMe telegram="ribakit3"></AboutMe>
      <ButtonEnumerator arrayOfButtons={infoButtons} />
      <ButtonEnumerator arrayOfButtons={logoutButton} />
    </div>
  );
};
