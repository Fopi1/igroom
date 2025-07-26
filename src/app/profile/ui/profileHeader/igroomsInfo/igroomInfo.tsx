import { TIgroomInfo } from "./types";

export const IgroomInfo = ({ title, description }: TIgroomInfo) => {
  return (
    <div className="p-3 text-center">
      <strong className="text-xl font-bold">{title}</strong>
      <p className="text-lg">{description}</p>
    </div>
  );
};
