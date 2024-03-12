import { createSlice } from "@reduxjs/toolkit";
import { ChartDataSlice } from "../../../../../types/chart";
import { fetchChartData } from "./thunk";
import adaptRawDataToPlotlyData from "../../../constructors/dataBuilder";


const chartDataInitialState: ChartDataSlice = {
    chartId: null,
    data: [],
    status: null,
    
};

export const chartDataSlice = createSlice({
    name: 'chartDataSlice',
    initialState: chartDataInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChartData.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchChartData.rejected, (state) => {
            state.status = 'rejected';
        }).addCase(fetchChartData.fulfilled, (state, action) => {
            const data = action.payload.data;
            const chart = action.payload.chart;

            const transformData = adaptRawDataToPlotlyData(data, chart)
            state.chartId = chart.id;
            state.data = transformData;
            state.status = 'finished';
        })
    }
});


export default chartDataSlice.reducer;