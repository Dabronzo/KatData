import React, { useEffect, useRef, useState } from "react";
import { DataChip, EnergyType } from "../../../../types/builder";
import SubMenu from "../../../common/SubMenu";
import SubMenuIcon from "../../../../../assets/SubmenuIcon";
import EletricityIcon from "../../../../../assets/EletricityIcon";
import HeatIcon from "../../../../../assets/HeatIcon";
import ChipSubMenu from "../submenu/SubmenuChip";
import GlobeIcon from "../../../../../assets/GlobeIcon";
import CrossIcon from "../../../../../assets/CrossIcon";
import { useAppDispatch } from "../../../../hooks";
import { deleteChipFromXAxis } from "../../store/builderSlice";

type Props = {
    chip: DataChip;
    className: string;
    onAxis?: boolean;
}


const Chip = ({chip, className, onAxis}:Props) => {
    

    const chipStyle = {
        backgroundColor: chip.color,
    };

    const dispatch = useAppDispatch();



    const chipRef = useRef<HTMLDivElement>(null);

    const [isSubmenuOpen, setSubmenuOpen] = useState<boolean>(false);
    const [initialPosition, setInitialPosition] = useState<{ top?: number; left?: number; width?: number }>({});
    

    useEffect(() => {
        if (chipRef.current) {
            setInitialPosition({
                top: chipRef.current.getBoundingClientRect().top,
                left: chipRef.current.getBoundingClientRect().left,
                width: chipRef.current.offsetWidth,
            });
        }
    }, []);

    return (
        <>
            <div className={`flex px-2 py-2 items-center rounded-lg ${className}`}
                ref={chipRef}
                style={chipStyle}
            >
                <div className={`inline-block ${chip.timeStamp ? 'text-[#F7F7FF]' : 'text-[#262928]'} text-[14px]`}>
                    <strong>{chip.verboseName}</strong>
                </div>
                <div className="ml-1">
                {chip.unity === EnergyType.ELETRICITY ? (
                        <EletricityIcon height={15} width={15} color={'#C8A219'} />
                    ) : chip.unity === EnergyType.HEAT ? (
                        <HeatIcon height={15} width={15} color={'#A7202C'} />
                    ) : chip.unity === EnergyType.BOTH ? (
                        <GlobeIcon height={13} width={13} color={'#262928'} />
                    ) : (
                        <p>Years</p>
                    )}
                </div>
                {!onAxis ? (
                    <>
                        <button
                            type='button'
                            className="ml-1 text-white flex items-center"
                            onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                        >
                            <SubMenuIcon height={15} width={15} color={chip.timeStamp ? '#F7F7FF' : '#262928'} />
                        </button><SubMenu isOpen={isSubmenuOpen} onClose={() => {
                            setSubmenuOpen(false);
                        } } positionTop={initialPosition.top} positionLeft={initialPosition.left} offsetWidth={initialPosition.width}>
                            <ChipSubMenu id={chip.id} unitySelected={chip.unity} />
                            </SubMenu>
                    </>
                ) : ( <button className="ml-1" type="button" onClick={() => dispatch(deleteChipFromXAxis(chip.id))}>
                        <CrossIcon height={15} width={15} />
                    </button>)}
            </div>
        </>
      );
};

export default Chip;