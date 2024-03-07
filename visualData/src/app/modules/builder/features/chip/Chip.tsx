import React from "react";
import { DataChip } from "../../../../types/builder";

type Props = {
    chip: DataChip;
    className: string
}


const Chip = ({chip, className}:Props) => {
    const chipStyle = {
        backgroundColor: chip.color,
    }


    return (
        <div
          className={`inline-block text-white rounded p-2 ${className}`}
          style={chipStyle}
        >
          {chip.verboseName}
        </div>
      );
};

export default Chip;