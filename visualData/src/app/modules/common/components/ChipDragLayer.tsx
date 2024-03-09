import React, { CSSProperties } from "react";
import { useDragLayer } from "react-dnd";
import { DataChip, EnergyType } from "../../../types/builder";
import EletricityIcon from "../../../../assets/EletricityIcon";
import HeatIcon from "../../../../assets/HeatIcon";
import GlobeIcon from "../../../../assets/GlobeIcon";
import SubMenuIcon from "../../../../assets/SubmenuIcon";


type Props = {
    chip: DataChip;
    className: string;
}

const ChipDragLayer = ({chip, className}:Props) => {

    

    const { isDragging , currentOffset} =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

    const chipStyle: CSSProperties = {
        backgroundColor: chip.color,
        position: "absolute", // or "absolute" based on your layout needs
        top: currentOffset ? currentOffset.y : 0,
        left: currentOffset ? currentOffset.x : 0,
    };


    if (!isDragging) {
        return null;
    }

    return (
        <div className={`flex px-2 py-2 items-center rounded-lg bg-black ${className}` } 
            style={chipStyle}
            >
            <div className={`inline-block ${chip.timeStamp ? 'text-[#F7F7FF]' : 'text-[#262928]'} text-[14px]`}>
                <strong>{chip.verboseName}</strong>
            </div>
            <button
                type='button' 
                className="ml-2 text-white flex items-center" 
            >
                {chip.unity === EnergyType.ELETRICITY ? (
                    <EletricityIcon height={15} width={15} color={'#C8A219'}/>
                    ) : chip.unity === EnergyType.HEAT ? (
                    <HeatIcon height={15} width={15} color={'#A7202C'}/>
                    ) : chip.unity === EnergyType.BOTH ? (
                    <GlobeIcon height={13} width={13} color={'#262928'}/>
                    ) : (
                    <p>Years</p>
                )}
                <SubMenuIcon height={15} width={15} color={chip.timeStamp ? '#F7F7FF' : '#262928'} />
            </button>
        </div>
    )

};

export default ChipDragLayer;