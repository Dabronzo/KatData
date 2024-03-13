import React from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setChartTitle } from '../../store/builderSlice';


const ChartTitle = () => {

    const dispatch = useAppDispatch();

    const handleChangeTitle = (title: string) => {
        dispatch(setChartTitle(title));
    }


    return (
        <div className='flex flex-col mt-4'>
            <label className='font-bold mb-1'>Chart Title</label>
            <input
                className='bg-white border px-2 border-black py-2 rounded outline-none'
                type="text"
                onBlur={(e) => handleChangeTitle(e.target.value)}
                placeholder="Type here the title"
            />
        </div>
    )
};

export default ChartTitle;
