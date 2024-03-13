import React from 'react';
import { EnergyType, ProductItem } from '../../../types/energyCarries';


type Props = {
    options: ProductItem[],
    selectedOption: EnergyType,
    onChange: (option: ProductItem) => void,
};


const RadioProducts = ({ options, selectedOption, onChange }:Props) => {
    return (
      <div className="flex items-center mx-2 my-2">
      {options.map((option) => (
        <div key={option.title} className="flex items-center mr-4">
          <input
            type="radio"
            id={option.title}
            name="option"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option)}
          />
          <label
            htmlFor={option.title}
            className="ml-2 text-sm text-gray-700 cursor-pointer"
            onClick={() => onChange(option)} // Trigger onChange when label is clicked
          >
            {option.title}
          </label>
        </div>
      ))}
    </div>
    );
  };
  
  export default RadioProducts;