import React, { CSSProperties } from "react";
import { DataChip, EnergyType } from "../../../../types/builder";
import EletricityIcon from "../../../../../assets/EletricityIcon";
import GlobeIcon from "../../../../../assets/GlobeIcon";
import HeatIcon from "../../../../../assets/HeatIcon";
import SubMenuIcon from "../../../../../assets/SubmenuIcon";
import { useAppSelector } from "../../../../hooks";
import { getChipFromSelection } from "../../store/builderSlice";

type Props = {
    chip: DataChip,
    className: string,
}


const ChipDragItem = ({chip, className}: Props) => {

    const chipDragging = useAppSelector(getChipFromSelection(chip.id));

    const chipStyle: CSSProperties = {
        backgroundColor: chipDragging.color,
    };
    
    return (
        <div className={`flex px-2 py-2 items-center rounded-lg ${className}` } 
            style={chipStyle}
            >
            <div className={`inline-block ${chipDragging.timeStamp ? 'text-[#F7F7FF]' : 'text-[#262928]'} text-[14px]`}>
                <strong>{chipDragging.verboseName}</strong>
            </div>
            <button
                type='button' 
                className="ml-2 text-white flex items-center" 
            >
                {chipDragging.unity === EnergyType.ELETRICITY ? (
                    <EletricityIcon height={15} width={15} color={'#C8A219'}/>
                    ) : chipDragging.unity === EnergyType.HEAT ? (
                    <HeatIcon height={15} width={15} color={'#A7202C'}/>
                    ) : chipDragging.unity === EnergyType.BOTH ? (
                    <GlobeIcon height={13} width={13} color={'#262928'}/>
                    ) : (
                    <p>Years</p>
                )}
                <SubMenuIcon height={15} width={15} color={chipDragging.timeStamp ? '#F7F7FF' : '#262928'} />
            </button>
        </div>
    )
};

export default ChipDragItem;