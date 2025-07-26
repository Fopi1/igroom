import { HorizontalSeparator } from "./horizontalSeparator";
import { StackList } from "./stackList";
import { IconButton } from "./iconButton";
import { TIconButton } from "./iconButton/types";

export const ButtonEnumerator = ({
  arrayOfButtons,
}: {
  arrayOfButtons: TIconButton[];
}) => {
  return (
    <StackList separator={<HorizontalSeparator />}>
      {arrayOfButtons.map((button, index) => {
        return (
          <IconButton
            icon={button.icon}
            description={button.description}
            key={index}
          />
        );
      })}
    </StackList>
  );
};
