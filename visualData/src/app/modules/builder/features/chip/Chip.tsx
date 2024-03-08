import React, { useRef, useState } from "react";
import { DataChip, EnergyType } from "../../../../types/builder";
import SubMenu from "../../../common/SubMenu";
import SubMenuIcon from "../../../../../assets/SubmenuIcon";
import EletricityIcon from "../../../../../assets/EletricityIcon";
import HeatIcon from "../../../../../assets/HeatIcon";
import ChipSubMenu from "../submenu/SubmenuChip";
import GlobeIcon from "../../../../../assets/GlobeIcon";

type Props = {
    chip: DataChip;
    className: string
}


const Chip = ({chip, className}:Props) => {
    const chipStyle = {
        backgroundColor: chip.color,
    }

    const chipRef = useRef<HTMLDivElement>(null);

    const [isSubmenuOpen, setSubmenuOpen] = useState<boolean>(false);


    return (
        <div className={`flex px-2 py-2 items-center rounded-lg ${className}`} style={chipStyle} ref={chipRef} >
            <div className="inline-block text-[#262928] text-[14px]">
                <strong>{chip.verboseName}</strong>
            </div>
            <button
                type='button' 
                className="ml-2 text-white flex items-center" 
                onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                >
                    {chip.unity === EnergyType.ELETRICITY ? (
        <EletricityIcon height={15} width={15} color={'#C8A219'}/>
      ) : chip.unity === EnergyType.HEAT ? (
        <HeatIcon height={15} width={15} color={'#A7202C'}/>
      ) : (
        <GlobeIcon height={13} width={13} color={'#262928'}/>
      )}
                    <SubMenuIcon height={15} width={15} color={'#262928'} />
                </button>
                <SubMenu isOpen={isSubmenuOpen} onClose={() => {
                    setSubmenuOpen(false);
                }} positionTop={chipRef.current?.getBoundingClientRect().top} positionLeft={chipRef.current?.getBoundingClientRect().left} offsetWidth={chipRef.current?.offsetWidth}>
                    <ChipSubMenu  id={chip.id} unitySelected={chip.unity}/>
                </SubMenu>
        </div>
      );
};

export default Chip;