import { PayloadAction, createSlice  } from "@reduxjs/toolkit";
import { BuilderContainer, DataChip } from "../../../types/builder";
import { RootState } from "../../../store";




const builderInitialState: BuilderContainer ={
    selection: [],
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
            state.selection.push(action.payload);
        }
    },

});

export const selectSelectionData = (state: RootState) => state.builder.builder.selection;




export const {addChipToXAxis, addChipToSelection} = builderSlice.actions;

export default builderSlice.reducer;