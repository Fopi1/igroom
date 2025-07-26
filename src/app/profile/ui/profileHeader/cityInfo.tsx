import { IconButton } from "@/shared/ui/iconButton";
import { Settings } from "lucide-react";

export const CityInfo = () => {
  return (
    <div className="flex w-full gap-2 px-4">
      <div className="bg-[var(--foreground)] flex items-center justify-center rounded-2xl text-center px-4 py-2 text-xl flex-1">
        Краснодар
      </div>
      <IconButton
        icon={Settings}
        description="РЕДАКТ"
        className="border-2 rounded-2xl uppercase"
      />
    </div>
  );
};
