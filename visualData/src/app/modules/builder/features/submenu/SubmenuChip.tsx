import React, { useState } from 'react';
import RadioSelection from '../../../common/components/RadioSelection';
import { useAppDispatch } from '../../../../hooks';
import { deleteChipSelection, updateChipSelection } from '../../store/builderSlice';
import { EnergyType } from '../../../../types/builder';
import DeleteIcon from '../../../../../assets/DeleteIcon';

type Props = {
  id: string;
  unitySelected: EnergyType;
}

const ChipSubMenu = ({ id, unitySelected }:Props) => {
  const [selectedOption, setSelectedOption] = useState<EnergyType>(unitySelected);
  const radioData: EnergyType[] = [EnergyType.ELETRICITY, EnergyType.HEAT, EnergyType.BOTH];
  const dispatch = useAppDispatch();

  return (
    <div className="p-2 justify-center">
      <div className="mb-2">
        <label className="flex text-sm font-medium text-gray-700">Choose Option:</label>
        <RadioSelection
          options={radioData}
          selectedOption={selectedOption}
          onChange={(option) => {
            setSelectedOption(option);
            dispatch(updateChipSelection({chipId: id, value: option}));
          }}
        />
      </div>
      <button
        type="button"
        className="text-red-500 hover:underline focus:outline-none flex items-center"
        onClick={() => dispatch(deleteChipSelection(id))}
      >
         <DeleteIcon width={13} height={13} color='#eb4034' className='mr-2'/>
        Delete
      </button>
    </div>
  );
};

export default ChipSubMenu;