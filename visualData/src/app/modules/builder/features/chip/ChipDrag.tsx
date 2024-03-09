import React, { useEffect } from "react";
import Chip from "./Chip";
import { DataChip, DragType } from "../../../../types/builder";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

type Props = {
    chip: DataChip;
    className: string;
}


const ChipDrag = ({chip, className}:Props) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: DragType.DATACHIP,
        item: { chip },
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