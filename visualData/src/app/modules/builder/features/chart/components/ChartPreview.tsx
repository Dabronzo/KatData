import React from 'react';
import { DataChip } from '../../../../../types/builder';
import { useAppDispatch } from '../../../../../hooks';
import QueryBuilder from '../../../constructors/queryBuilder';
import { fetchChartData } from '../store/thunk';
// import PointerChart from './PointerChart';
import { ProductItem } from '../../../../../types/energyCarries';
import ChartWrapper from './ChartWrapper';
// import adaptRawDataToPlotlyData from '../../constructors/dataBuilder';
// import testData from '../../../../test/newTestData.json';

type Props = {
    lineChips: DataChip[];
    product: ProductItem;
}

const ChartPreview = ({lineChips, product}:Props) => {

    const dispatch = useAppDispatch();
    
    const query = new QueryBuilder(lineChips, product).build();

    dispatch(fetchChartData([query, lineChips]));

    

    return (
        <ChartWrapper />   
    )
};


export default ChartPreview;