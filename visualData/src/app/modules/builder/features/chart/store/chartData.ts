import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ChartDataSlice } from "../../../../../types/chart";
import { fetchChartData } from "./thunk";
import adaptRawDataToPlotlyData from "../../../constructors/dataBuilder";
import { RootState } from "../../../../../store";


const chartDataInitialState: ChartDataSlice = {
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
            const chips = action.payload.chips;

            const transformData = adaptRawDataToPlotlyData(data, chips)
            state.data = transformData;
            state.status = 'finished';
        })
    }
});


const selectData = (state: RootState) => state.builder.chart;

export const chartDataSelector = createSelector([selectData], (data) => data.data);


export default chartDataSlice.reducer;