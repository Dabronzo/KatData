import React, { useState } from "react";
import { DataChip } from "../../../../types/builder";
import SubMenu from "../../../common/SubMenu";
import SubMenuIcon from "../../../../../assets/SubmenuIcon";

type Props = {
    chip: DataChip;
    className: string
}


const Chip = ({chip, className}:Props) => {
    const chipStyle = {
        backgroundColor: chip.color,
    }

    const [isSubmenuOpen, setSubmenuOpen] = useState<boolean>(false);


    return (
        <div className={`flex items-center rounded-lg ${className}`} style={chipStyle}>
            <div className="inline-block text-white text-[14px]  p-1">{chip.verboseName}</div>
            <button
                type='button' 
                className="ml-1 mr-1 text-white" 
                onClick={() => setSubmenuOpen(!isSubmenuOpen)}
                >
                    <SubMenuIcon height={15} width={15} color={'#262928'} />
                </button>
                <SubMenu isOpen={isSubmenuOpen} handleClose={() => setSubmenuOpen(false)}>
                    <div>Banana</div>
                </SubMenu>
        </div>
      );
};

export default Chip;