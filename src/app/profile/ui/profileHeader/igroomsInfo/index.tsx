import { VerticalSeparator } from "@/shared/ui/verticalSeparator";
import { igroomInfos } from "./constants";
import { IgroomInfo } from "./igroomInfo";

export const IgroomInfos = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {igroomInfos.map((igroomInfo, index) => (
        <div className="flex" key={index}>
          <IgroomInfo
            title={igroomInfo.title}
            description={igroomInfo.description}
          />
          {index !== igroomInfos.length - 1 && <VerticalSeparator />}
        </div>
      ))}
    </div>
  );
};
