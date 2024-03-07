import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { CatalogItem, carriesResponseSchema } from "../../../../../types/energyCarries";
import  fakeData  from "../../../../../test/energyCarries.json";
import { RootState } from "../../../../../store";


const carriesAdapter = createEntityAdapter({
    selectId: (carrie: CatalogItem) => carrie.Key
});

const preData = carriesResponseSchema.parse(fakeData);


const initialState = carriesAdapter.setAll(carriesAdapter.getInitialState(), preData.value)


const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState,
    reducers: {}
});

export const selectAllCarries = (state: RootState) => carriesAdapter.getSelectors().selectAll(state.builder.catalog);

export const selectFossilCarries = createSelector(
    selectAllCarries,
    (carries) => carries.filter((carrie) => carrie.CategoryGroupID === 2)
);

export const selectRenewableCarries = createSelector(
    selectAllCarries,
    (carries) => carries.filter((carrie) => carrie.CategoryGroupID === 3)
);

export const selectNuclearCarries = createSelector(
    selectAllCarries,
    (carries) => carries.filter((carrie) => carrie.CategoryGroupID === 4)
);

export const selectOthersCarries = createSelector(
    selectAllCarries,
    (carries) => carries.filter((carrie) => carrie.CategoryGroupID === 5)
);

export default catalogSlice.reducer;