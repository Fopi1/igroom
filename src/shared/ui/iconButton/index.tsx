import { TLucideComponent } from "@/shared/model/lucide.types";
import { clsx } from "clsx";
import { Dot } from "lucide-react";

interface Props {
  description: string;
  icon?: TLucideComponent;
  className?: string;
}
export const IconButton = ({ icon: Icon, description, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-1 justify-center p-2 min-w-0 bg-[var(--foreground)] cursor-pointer",
      )}
    >
      {Icon ? <Icon className="shrink-0" /> : <Dot />}
      <p className="truncate capitalize min-w-0">{description}</p>
    </div>
  );
};
