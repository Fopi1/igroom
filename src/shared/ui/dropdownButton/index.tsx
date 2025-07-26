import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { TDropdownButton } from "./types";

interface Props extends TDropdownButton {
  className?: string;
}
export const DropdownButton = ({
  signal,
  description,
  notifications,
  className,
}: Props) => {
  const color = signal === "yellow" ? "bg-yellow-400" : "bg-green-400";
  return (
    <div
      className={clsx(
        className,
        "w-full rounded-2xl bg-[var(--foreground)] p-2 flex justify-between cursor-pointer",
      )}
    >
      <div className="flex items-center gap-2">
        <div className={clsx(color, "rounded-full h-3 w-3")}></div>
        <p className="uppercase text-xl">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        {notifications && (
          <div className="bg-gray-400 rounded-full w-5 h-5 text-center text-black">
            {notifications}
          </div>
        )}
        <ChevronDown size={32} strokeWidth={3} />
      </div>
    </div>
  );
};
