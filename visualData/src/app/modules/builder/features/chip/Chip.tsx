import React, { useRef } from "react";
import { DataChip } from "../../../../types/builder";
import CrossIcon from "../../../../icons/CrossIcon";
import { useAppDispatch } from "../../../../hooks";
import { deleteChipFromXAxis } from "../../store/builderSlice";

type Props = {
    chip: DataChip;
    className: string;
    onAxis?: boolean;
}


const Chip = ({chip, className}:Props) => {
    

    const chipStyle = {
        backgroundColor: chip.color,
    };

    const dispatch = useAppDispatch();



    const chipRef = useRef<HTMLDivElement>(null);
    

    return (
        <>
            <div className={`flex px-2 py-2 items-center rounded-lg ${className}`}
                ref={chipRef}
                style={chipStyle}
            >
                <div className={`inline-block ${chip.timeStamp ? 'text-[#F7F7FF]' : 'text-[#262928]'} text-[14px]`}>
                    <strong>{chip.verboseName}</strong>
                </div>
                <button className="ml-1" type="button" onClick={() => dispatch(deleteChipFromXAxis(chip.id))}>
                        <CrossIcon height={15} width={15} />
                </button>
            </div>
        </>
      );
};

export default Chip;