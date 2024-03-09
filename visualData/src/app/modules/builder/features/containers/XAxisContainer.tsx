import React from "react";
import { useAppSelector } from "../../../../hooks";
import { xAxisSelector } from "../../store/builderSlice";
import Chip from "../chip/Chip";
import { useDrop } from "react-dnd";
import { DragType } from "../../../../types/builder";


const XAxisContianer = () => {

  const data = useAppSelector(xAxisSelector);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver, whasta}, drop] = useDrop({
    accept: DragType.DATACHIP,
    drop: (item) => console.log('abacaxi', item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      whasta: monitor.didDrop(),
    }),
  });

  console.log('perhaps', isOver)




    return (
      <div className="mt-4">
        <strong>X Axis</strong>
        <div className=" p-2 bg-black border border-black rounded h-20 z-0 overflow-y-scroll"  ref={drop}>
          <div className="flex flex-wrap space-x-2 space-y-2">
          {data.map((chipData, index) => (
            <Chip key={chipData.id} chip={chipData} className={index <= 1 ? "mt-2 ml-2" : ""} />
          ))}
          </div>
        </div>
      </div>
    )
};


export default XAxisContianer;