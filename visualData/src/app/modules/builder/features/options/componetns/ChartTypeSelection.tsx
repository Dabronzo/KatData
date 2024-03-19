import React, { useState } from 'react';
import LineChartIcon from '../../../../../icons/LineChartIcon';
import BarChartIcon from '../../../../../icons/BarChartIcon';
import AreaChartIcon from '../../../../../icons/AreaChartIcon';
import { ChartTypes } from '../../../../../types/builder';
import { useAppDispatch } from '../../../../../hooks';
import { setChartType } from '../../../store/builderSlice';


const ChartTypeSelection = () => {
    const [selectedType, setSelectedType] = useState<ChartTypes>(ChartTypes.LINE);

    const dispatch = useAppDispatch();

  
    const handleTypeChange = (type: ChartTypes) => {
      setSelectedType(type);
      dispatch(setChartType(type));
    };
  
    return (
      <div className="flex items-center space-x-4 my-[8px]">
        <div
          className={`cursor-pointer ${
            selectedType === ChartTypes.LINE ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          } p-2 rounded-lg transition-all duration-300`}
          onClick={() => handleTypeChange(ChartTypes.LINE)}
        >
          <LineChartIcon width={30} height={30} color={selectedType === ChartTypes.LINE ? '#7b879c' : '#111112'} />
        </div>
        <div
          className={`cursor-pointer ${
            selectedType === ChartTypes.BAR ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          } p-2 rounded-lg transition-all duration-300`}
          onClick={() => handleTypeChange(ChartTypes.BAR)}
        >
          <BarChartIcon width={30} height={30} color={selectedType === ChartTypes.BAR ? '#7b879c' : '#111112'} />
        </div>
        <div
          className={`cursor-pointer ${
            selectedType === ChartTypes.AREA ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'
          } p-2 rounded-lg transition-all duration-300`}
          onClick={() => handleTypeChange(ChartTypes.AREA)}
        >
          <AreaChartIcon width={30} height={30} color={selectedType === ChartTypes.AREA ? '#7b879c' : '#111112'} />
        </div>
      </div>
    );
  };
  
  export default ChartTypeSelection;