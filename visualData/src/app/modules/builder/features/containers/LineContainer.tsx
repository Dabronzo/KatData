import React from "react";
import { useAppSelector } from "../../../../hooks";
import { xAxisSelector } from "../../store/builderSlice";
import Chip from "../chip/Chip";


const LineContainer = () => {

  const data = useAppSelector(xAxisSelector);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars




    return (
      <div className="mt-4">
        <strong>Line(s)</strong>
        <div className=" p-2 border bg-white border-black rounded h-20 z-0 overflow-y-scroll">
          <div className="flex flex-wrap space-x-2 space-y-2">
          {data.map((chipData, index) => (
            <Chip key={chipData.id} chip={chipData} className={index <= 1 ? "mt-2 ml-2" : ""} onAxis={true} />
          ))}
          </div>
        </div>
      </div>
    )
};


export default LineContainer;