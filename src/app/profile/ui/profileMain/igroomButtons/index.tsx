import { HorizontalSeparator } from "@/shared/ui/horizontalSeparator";
import { StackList } from "@/shared/ui/stackList";
import { igroomActionButtonsInfo } from "./constants";
import { Button } from "@/shared/ui/button";
import clsx from "clsx";

export const IgroomActionButtons = () => {
  return (
    <div className="border-2 border-[var(--purple-main)] rounded-2xl">
      <StackList separator={<HorizontalSeparator className="hidden" />}>
        {igroomActionButtonsInfo.map((buttonInfo, index) => {
          return (
            <Button
              className={clsx(
                index % 2 === 0
                  ? "bg-[var(--purple-main)] text-white"
                  : "bg-white text-[var(--purple-main)]",
              )}
              description={buttonInfo.description}
              key={index}
            />
          );
        })}
      </StackList>
    </div>
  );
};
