import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { addChipToXAxis, xAxisSelector } from "../../store/builderSlice";
import Chip from "../chip/Chip";
import { useDrop } from "react-dnd";
import { DragItem, DragType } from "../../../../types/builder";


const LineContainer = () => {

  const data = useAppSelector(xAxisSelector);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ isOver }, drop] = useDrop({
    accept: DragType.DATACHIP,
    drop: (item: DragItem) => {
      dispatch(addChipToXAxis(item.data));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });




    return (
      <div className="mt-4" ref={drop}>
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