import clsx from "clsx";
import { TButton } from "./types";

interface Props extends TButton {
  className?: string;
}
export const Button = ({ className, description }: Props) => {
  return (
    <div
      className={clsx(className, "w-full text-center px-6 py-2 cursor-pointer")}
    >
      <p>{description}</p>
    </div>
  );
};
