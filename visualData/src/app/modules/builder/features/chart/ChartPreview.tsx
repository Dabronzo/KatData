import React from 'react';
import { Chart } from '../../../../types/builder';
import { useAppDispatch } from '../../../../hooks';
import QueryBuilder from '../../constructors/queryBuilder';
import { fetchChartData } from './store/thunk';
import PointerChart from './PointerChart';
// import adaptRawDataToPlotlyData from '../../constructors/dataBuilder';
// import testData from '../../../../test/newTestData.json';

type Props = {
    chart: Chart;

}

const ChartPreview = ({chart}:Props) => {

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const dispatch = useAppDispatch();
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const query = new QueryBuilder(chart).build();

    dispatch(fetchChartData([query, chart]));

    return (
        <div className='h-[500px]'>
            <PointerChart />
        </div>
        
    )
};


export default ChartPreview;