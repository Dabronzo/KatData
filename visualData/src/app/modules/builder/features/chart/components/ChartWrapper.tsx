import React from "react";
import { useAppSelector } from "../../../../../hooks";
import { chartDataSelector } from "../store/chartData";
import PointerChart from "./PointerChart";



const ChartWrapper = () => {

    const data = useAppSelector(chartDataSelector);


    return (
        <div className='h-[500px]'>
            {data.length > 0 ? (
                <PointerChart data={data} /> 
            ) : (
                <div>Processing...</div>
            )}
            
        </div>
    )
};


export default ChartWrapper;