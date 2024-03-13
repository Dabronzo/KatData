import { PayloadAction, createSelector, createSlice  } from "@reduxjs/toolkit";
import { BuilderContainer, ChartTypes, DataChip, SelectorBuilderResponse } from "../../../types/builder";
import { RootState } from "../../../store";
import ChartBuilder from "../constructors/chartBuilder";



const builderInitialState: BuilderContainer ={
    lines: [],
    chartTitle: '',
    toogleValues: false,
    chartType: ChartTypes.LINE
};

export const builderSlice = createSlice({
    name: 'BulderSlice',
    initialState: builderInitialState,
    reducers: {
        addChipToXAxis: (state, action: PayloadAction<DataChip>) => {
            const chip = {
                ...action.payload
            };
            state.lines.push(chip);
        },
        deleteChipFromXAxis: (state, action: PayloadAction<string>) => {
            const indexToDelete = state.lines.findIndex((chip) => chip.id === action.payload);
            state.lines.splice(indexToDelete, 1);
        },
        setChartTitle: (state, action: PayloadAction<string>) => {
            state.chartTitle = action.payload;
        },
        setToogleValue: (state) => {
            state.toogleValues = !state.toogleValues;
        },
        setChartType: (state, action: PayloadAction<ChartTypes>) => {
            state.chartType = action.payload;
        }
    },

});


const selectXAxis = (state: RootState) => state.builder.builder.lines;
const selectChartTitle = (state: RootState) => state.builder.builder.chartTitle;
const selectToggleValue = (state: RootState) => state.builder.builder.toogleValues;
const selectChartType = (state: RootState) => state.builder.builder.chartType;


export const xAxisSelector = createSelector([selectXAxis], (xAxis) => xAxis);
export const chartTitleSelector = createSelector([selectChartTitle], (title) => title);
export const toggleValuesSelector = createSelector([selectToggleValue], (toggle) => toggle);
export const chartTypeSelector = createSelector([selectChartType], (type) => type);

export const chartBuilderSelector = createSelector([xAxisSelector], (xAxis) => {

    const selectorResponse: SelectorBuilderResponse = {
        chart: null,
        error: null,
    }
    const builderResponse = new ChartBuilder(xAxis).build();

    if (builderResponse.error) {
        selectorResponse.error = builderResponse.error;
        return selectorResponse;
    }
    if (builderResponse.chart) {
        selectorResponse.chart = builderResponse.chart;
        return selectorResponse;
    }
})


export const {
    addChipToXAxis,
    deleteChipFromXAxis,
    setChartTitle,
    setToogleValue,
    setChartType
} = builderSlice.actions;

export default builderSlice.reducer;