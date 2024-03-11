import React, { useEffect } from "react";
import Chip from "./Chip";
import { DataChip, DragItem, DragType } from "../../../../types/builder";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
// import ChipDragLayer from "../../../common/components/ChipDragLayer";


type Props = {
    chip: DataChip;
    className: string;
}



const ChipDrag = ({chip, className}:Props) => {

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: DragType.DATACHIP,
        item: { data: chip, className: className } as DragItem, // casting here so I can retrieve on the drag layer
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [isDragging])


    return (
        <div ref={drag}>
            <Chip chip={chip} className={className} />
        </div>
    )
};

export default ChipDrag;