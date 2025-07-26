import { DropdownButton } from "@/shared/ui/dropdownButton";
import { igroomsMocked } from "./constants";
import { StackList } from "@/shared/ui/stackList";
import { HorizontalSeparator } from "@/shared/ui/horizontalSeparator";

export const Igrooms = () => {
  return (
    <div className="bg-[var(--foreground)] rounded-2xl">
      <StackList separator={<HorizontalSeparator />}>
        {igroomsMocked.map((igroom, index) => (
          <DropdownButton
            signal={igroom.signal}
            description={igroom.description}
            notifications={igroom.notifications}
            key={index}
          />
        ))}
      </StackList>
    </div>
  );
};
