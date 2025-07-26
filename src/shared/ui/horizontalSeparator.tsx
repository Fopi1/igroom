import clsx from "clsx";

interface Props {
  className?: string;
}
export const HorizontalSeparator = ({ className }: Props) => {
  return (
    <div className="px-4">
      <div
        className={clsx("w-full h-[1px] bg-[var(--background)]", className)}
      ></div>
    </div>
  );
};
