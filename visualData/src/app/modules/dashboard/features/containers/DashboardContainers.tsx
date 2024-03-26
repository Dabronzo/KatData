import React from 'react';
import { DashboardContainer } from '../../../../types/dashboard';
import { dashboardDataSelector } from '../../store/dashboardData';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchDashboardData } from '../../store/thunk';
import DashboardChartPreview from '../charts/DashboardChartPreview';
// import TestChart from '../charts/TestChart';

type Props = {
    container: DashboardContainer;
    trigger: boolean;
    finishedResize: boolean,
}


const DashboardContainers = ({container, trigger, finishedResize}:Props) => {


    // const url = container.chart.url;
    const dataIn = useAppSelector(dashboardDataSelector(container.chart.url));

   
    const dispatch = useAppDispatch();

    if (dataIn.length <= 0) {
        dispatch(fetchDashboardData([container.chart.url, container.chart.chips]));
    }




    return (
        <div className='bg-black h-full w-full'>
            <DashboardChartPreview
                data={dataIn}
                chart={container.chart}
                id={`plot-${container.id}`}
                resizeTrigger={trigger}
                resizeFinished={finishedResize}
            />
        </div>
        
        
        // <TestChart resizeFinished={finishedResize} resizeTrigger={trigger} />
    )
};


export default DashboardContainers;