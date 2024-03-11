import React, { CSSProperties } from "react";
import { useDragLayer } from "react-dnd";
import { DragItem } from "../../../types/builder";
import ChipDragItem from "../../builder/features/chip/ChipDragItem";


const layerStyles: CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }


const DragLayer = () => {

    const { isDragging , currentOffset, item} =
    useDragLayer((monitor) => ({
      item: monitor.getItem() as DragItem,
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

    const innerStyle: CSSProperties = {
        position: 'absolute',
        top: currentOffset ? currentOffset.y : 0,
        left: currentOffset ? currentOffset.x : 0,
    };

    


    if (!isDragging) {
        return null;
    }

    return (
       <div style={layerStyles}>
        <div style={innerStyle}>
            <ChipDragItem chip={item.data} className={item.className} />
        </div>
       </div>
    )

};

export default DragLayer;