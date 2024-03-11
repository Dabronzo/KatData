import { createSlice } from "@reduxjs/toolkit";
import { ChartDataSlice } from "../../../../../types/chart";
import { fetchChartData } from "./thunk";


const chartDataInitialState: ChartDataSlice = {
    chartId: null,
    data: [],
    status: null,
    
};

export const chartDataSlice = createSlice({
    name: 'chartData',
    initialState: chartDataInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchChartData.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchChartData.rejected, (state) => {
            state.status = 'rejected';
        })
    }
});


export default chartDataSlice.reducer;