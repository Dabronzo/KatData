import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ChartData } from "../../../types/data";
import { fetchDashboardData } from "./thunk";
import adaptRawDataToPlotlyData from "../../builder/constructors/dataBuilder";
import { RootState } from "../../../store";


export type DashboardDataStore = {
    data: Record<string, ChartData[]> | null;
    loading: boolean;
    error: string | null
};

const initialState: DashboardDataStore = {
    data: null,
    loading: false,
    error: null,
}


const dashboardDataSlice = createSlice({
    name: 'dashboardDataSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDashboardData.pending, (state) => {
            state.loading = true;
        }).
        addCase(fetchDashboardData.rejected, (state) => {
            state.loading = false;
            state.error = 'Error in fetching this chart data'
        }).
        addCase(fetchDashboardData.fulfilled, (state, action) => {
            const {chips, url, data} = action.payload;
            const transformData = adaptRawDataToPlotlyData(data, chips)
            state.loading = false;
            state.error = null;
            state.data = {
                ...state.data,
                [url]: transformData
            };
   
        })
    }
});

const selectDashboardData = (state: RootState) => state.dashboard.data;

export const dashboardDataSelector = (url: string | undefined) => createSelector([selectDashboardData], (data) => {
    if (!data.data) return []
    if (!url) return [];
    return data.data[url];
})


export default dashboardDataSlice.reducer;