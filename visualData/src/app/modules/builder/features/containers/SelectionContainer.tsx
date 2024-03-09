import React from "react";
import { useAppSelector } from "../../../../hooks";
import { selectSelectionData } from "../../store/builderSlice";
import ChipDrag from "../chip/ChipDrag";


const SelectContainer = () => {

  const data = useAppSelector(selectSelectionData);

  return (
    <div className="mt-4 p-2 bg-white border border-black rounded h-32 z-0 overflow-y-scroll">
      <div className="flex flex-wrap space-x-2 space-y-2">
        {data.map((chipData, index) => (
          <ChipDrag key={chipData.id} chip={chipData} className={index <= 1 ? "mt-2 ml-2" : ""} />
        ))}
      </div>
    </div>
  );
};


export default SelectContainer;