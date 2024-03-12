import React from 'react';
import { Chart } from '../../../../types/builder';
import { useAppDispatch } from '../../../../hooks';
import QueryBuilder from '../../constructors/queryBuilder';
import { fetchChartData } from './store/thunk';
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
        <div>Chart!!</div>
    )
};


export default ChartPreview;