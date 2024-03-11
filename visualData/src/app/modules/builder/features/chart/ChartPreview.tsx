import React from 'react';
// import { Chart } from '../../../../types/builder';
import { useAppDispatch } from '../../../../hooks';
import { fetchChartData } from './store/thunk';

// type Props = {
//     chart: Chart;

// }

const ChartPreview = () => {

    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchData = dispatch(fetchChartData('chupacu'));



    return (
        <div>Chart!!</div>
    )
};


export default ChartPreview;