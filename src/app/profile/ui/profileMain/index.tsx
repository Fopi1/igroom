import { IgroomActionButtons } from "./igroomButtons";
import { Igrooms } from "./igrooms";

export const ProfileMain = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <Igrooms />
      <IgroomActionButtons />
    </div>
  );
};
