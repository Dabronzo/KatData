import React from "react";
import { useAppSelector } from "../../../../hooks";
import { yAxisSelector } from "../../store/builderSlice";
import Chip from "../chip/Chip";


const YAxisContainer = () => {

    const data = useAppSelector(yAxisSelector);

    return (
      <div className="mt-4">
        <strong>Y Axis</strong>
        <div className=" p-2 bg-white border border-black rounded h-20 z-0 overflow-y-scroll">
          <div className="flex flex-wrap space-x-2 space-y-2">
          {data.map((chipData, index) => (
            <Chip key={chipData.id} chip={chipData} className={index <= 1 ? "mt-2 ml-2" : ""} />
          ))}
          </div>
        </div>
      </div>
    )
};


export default YAxisContainer;