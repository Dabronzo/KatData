import React from 'react';
import { DashboardContainer } from '../../../../types/dashboard';
import { dashboardDataSelector } from '../../store/dashboardData';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchDashboardData } from '../../store/thunk';
import DashboardChartPreview from '../charts/DashboardChartPreview';
import ContainerMenuIcon from '../../../../icons/ContainerMenu';
// import TestChart from '../charts/TestChart';

type Props = {
    container: DashboardContainer;
}


const DashboardContainers = ({container}:Props) => {


    // const url = container.chart.url;
    const dataIn = useAppSelector(dashboardDataSelector(container.chart.url));

   
    const dispatch = useAppDispatch();

    if (dataIn.length <= 0) {
        dispatch(fetchDashboardData([container.chart.url, container.chart.chips]));
    }




    return (
        <div className='h-full w-full pt-8 relative cursor-pointer border rounded-sm border-slate-700'>
        {/* This div will catch hover events */}
            <div className="absolute inset-0 pointer-events-none">
                <DashboardChartPreview
                data={dataIn}
                chart={container.chart}
                />
            </div>
            {/* Button */}
            <button className="absolute top-0 right-0 bg-slate-400 p-2 opacity-0 transition duration-300 ease-in-out">
                <ContainerMenuIcon height={20} width={20} />
            </button>
        </div>        
    )
};


export default DashboardContainers;