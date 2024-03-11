import { PayloadAction, createEntityAdapter, createSelector, createSlice  } from "@reduxjs/toolkit";
import { BuilderContainer, DataChip, EnergyType } from "../../../types/builder";
import { RootState } from "../../../store";


const chipAdapter = createEntityAdapter({
    selectId: (chip: DataChip) => chip.id
});

const builderInitialState: BuilderContainer ={
    selection: chipAdapter.getInitialState(),
    xAxis: [],
    yAxis: [],
};

export const builderSlice = createSlice({
    name: 'BulderSlice',
    initialState: builderInitialState,
    reducers: {
        addChipToXAxis: (state, action: PayloadAction<DataChip>) => {
            const chip = {
                ...chipAdapter.getSelectors().selectById(state.selection, action.payload.id)
            };
            state.xAxis.push(chip);
        },
        addChipToYAxis: (state, action: PayloadAction<DataChip>) => {
            // y Axis can only accept one chip
            state.yAxis = [action.payload]
        },
        addChipToSelection: (state, action: PayloadAction<DataChip>) => {
           chipAdapter.addOne(state.selection, action.payload);
        },
        updateChipSelection: (state, action: PayloadAction<{chipId: string, value: EnergyType}>) => {
           chipAdapter.updateOne(state.selection, {
            id: action.payload.chipId,
            changes: {
                unity: action.payload.value
            }
           })
        },
        deleteChipSelection: (state, action: PayloadAction<string>) => {
            chipAdapter.removeOne(state.selection, action.payload);
        },
        deleteChipFromXAxis: (state, action: PayloadAction<string>) => {
            const indexToDelete = state.xAxis.findIndex((chip) => chip.id === action.payload);
            state.xAxis.splice(indexToDelete, 1);
        },
        deleteChipFromYAxis: (state) => {
            state.yAxis = [];
        }
    },

});


const selectXAxis = (state: RootState) => state.builder.builder.xAxis;

const selectYAxis = (state: RootState) => state.builder.builder.yAxis;

export const xAxisSelector = createSelector([selectXAxis], (xAxis) => xAxis);

export const yAxisSelector = createSelector([selectYAxis], (yAxis) => yAxis);

export const selectSelectionData = (state: RootState) => chipAdapter.getSelectors().selectAll(state.builder.builder.selection);

export const getChipFromSelection = (id: string) => (state: RootState) => chipAdapter.getSelectors().selectById(state.builder.builder.selection, id);




export const {
    addChipToXAxis,
    addChipToYAxis,
    addChipToSelection,
    updateChipSelection,
    deleteChipSelection,
    deleteChipFromXAxis,
    deleteChipFromYAxis,
} = builderSlice.actions;

export default builderSlice.reducer;