import React from "react";
import { useAppSelector } from "../../../../hooks";
import { selectSelectionData } from "../../store/builderSlice";
import Chip from "../chip/Chip";


const SelectContainer = () => {

  const data = useAppSelector(selectSelectionData);

  return (
    <div className="mt-4 p-2 bg-white border border-black rounded h-32 overflow-x-auto">
      <div className="flex flex-wrap space-x-2 space-y-2">
        {data.map((chipData, index) => (
          <Chip key={index} chip={chipData} className={index <= 1 ? "mt-2 ml-2" : ""} />
        ))}
      </div>
    </div>
  );
};


export default SelectContainer;