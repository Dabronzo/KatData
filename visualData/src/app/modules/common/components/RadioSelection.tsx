import React from 'react';
import { EnergyType } from '../../../types/builder';

type Props = {
    options: EnergyType[],
    selectedOption: string,
    onChange: (option: EnergyType) => void,
}

const RadioSelection = ({ options, selectedOption, onChange }:Props) => {
  return (
    <div className="flex items-center">
    {options.map((option) => (
      <div key={option} className="flex items-center mr-4">
        <input
          type="radio"
          id={option}
          name="option"
          value={option}
          checked={selectedOption === option}
          onChange={() => onChange(option)}
        />
        <label htmlFor={option} className="ml-2 text-sm text-gray-700">
          {option}
        </label>
      </div>
    ))}
  </div>
  );
};

export default RadioSelection;