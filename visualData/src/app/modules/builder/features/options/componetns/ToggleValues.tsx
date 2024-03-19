import React, { useState } from 'react';
import { useAppDispatch } from '../../../../../hooks';
import { setToogleValue } from '../../../store/builderSlice';

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const dispatch = useAppDispatch();


  const handleToggle = () => {
    setToggled((prev) => !prev);
    dispatch(setToogleValue());
  };

  return (
    <div className='flex flex-col'>
        <strong className='mb-2'>Show Values on Chart</strong>
            <div
        className={`relative inline-block w-12 h-6 bg-[#7b879c] rounded-full transition-all duration-300 ${
            isToggled ? 'bg-[#111112]' : ''
        }`}
        onClick={handleToggle}
        >
            <div
                className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
                isToggled ? 'translate-x-full' : 'translate-x-0'
                }`}
            >
            </div>
        </div>
    </div>
  );
};

export default ToggleButton;