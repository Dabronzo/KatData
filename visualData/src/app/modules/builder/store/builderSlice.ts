import { PayloadAction, createEntityAdapter, createSlice  } from "@reduxjs/toolkit";
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
            state.xAxis.push(action.payload);
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
        }
    },

});



export const selectSelectionData = (state: RootState) => chipAdapter.getSelectors().selectAll(state.builder.builder.selection);




export const {addChipToXAxis, addChipToSelection, updateChipSelection, deleteChipSelection} = builderSlice.actions;

export default builderSlice.reducer;