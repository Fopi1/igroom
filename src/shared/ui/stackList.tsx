import { cloneElement, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { HorizontalSeparator } from "./horizontalSeparator";

interface Props {
  children: ReactElement<{ className?: string }>[];
  separator?: ReactNode;
  className?: string;
  firstItemClassName?: string;
  lastItemClassName?: string;
}

export const StackList = ({
  children,
  className,
  separator = < HorizontalSeparator />,
  firstItemClassName = "rounded-t-2xl",
  lastItemClassName = "rounded-b-2xl",
}: Props) => {
  const count = children.length;

  return (
    <div className={clsx("flex flex-col", className)}>
      {children.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === count - 1;

        return (
          <div key={index} className="contents">
            {child &&
              cloneElement(child, {
                className: clsx(
                  child.props.className,
                  isFirst && firstItemClassName,
                  isLast && lastItemClassName,
                ),
              })}
            {!isLast && separator}
          </div>
        );
      })}
    </div>
  );
};
