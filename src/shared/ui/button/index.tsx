import clsx from "clsx";

interface Props {
  description: string;
  className?: string;
}
export const Button = ({ className, description: text }: Props) => {
  return (
    <div
      className={clsx(className, "w-full text-center px-6 py-2 cursor-pointer")}
    >
      <p>{text}</p>
    </div>
  );
};
