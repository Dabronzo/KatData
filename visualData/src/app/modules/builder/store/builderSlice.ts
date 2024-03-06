import { PayloadAction, createSlice  } from "@reduxjs/toolkit";


type DataChip = {
    id: string;
    name: string;
}

type BuilderType = {
    xAxis: DataChip[],
    yAxis: DataChip[],
};


const builderInitialState: BuilderType ={
    xAxis: [],
    yAxis: [],
};

export const builderSlice = createSlice({
    name: 'BulderSlice',
    initialState: builderInitialState,
    reducers: {
        addChipToXAxis: (state, action: PayloadAction<DataChip>) => {
            state.xAxis.push(action.payload);
        }
    },

});

export const {addChipToXAxis} = builderSlice.actions;

export default builderSlice.reducer;