import { PayloadAction, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { CatalogItem, CatalogStore, ProductItem } from "../../../../../types/energyCarries";
import { RootState } from "../../../../../store";
import { PRODUCTITEMS } from "../../../../../consts/catalog";
import { fetchEnergyCatalog } from "./thunk";


const carriesAdapter = createEntityAdapter({
    selectId: (carrie: CatalogItem) => carrie.Key
});



// const initialState = carriesAdapter.setAll(carriesAdapter.getInitialState(), preData.value);

const initialState: CatalogStore = {
    carries: null,
    productType: PRODUCTITEMS[0], // by default is selected the eletricity,
    status: ''
}


const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState,
    reducers: {
        setProductType: (state, action: PayloadAction<ProductItem>) => {
            state.productType = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEnergyCatalog.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchEnergyCatalog.rejected, (state, action) => {
            state.status = 'rejected';
            console.log(action.payload);

        })
        .addCase(fetchEnergyCatalog.fulfilled, (state, action) => {
            state.carries = carriesAdapter.setAll(carriesAdapter.getInitialState(), action.payload.value);
        })
    }
});

export const selectAllCarries = (state: RootState) => {
    if (state.builder.catalog.carries) {
        return carriesAdapter.getSelectors().selectAll(state.builder.catalog.carries)
    }
    return null;
};

const selectProductType = (state: RootState) => state.builder.catalog.productType;

export const productTypeSelector = createSelector([selectProductType], (product) => product);

export const selectFossilCarries = createSelector(
    selectAllCarries,
    (carries) => {
        if (carries) {
            return carries.filter((carrie) => carrie.CategoryGroupID === 2)
        }
        return null;
    }
);

export const selectRenewableCarries = createSelector(
    selectAllCarries,
    (carries) => {
        if (carries) {
            return carries.filter((carrie) => carrie.CategoryGroupID === 3)
        }
        return null;
    }
);

export const selectNuclearCarries = createSelector(
    selectAllCarries,
    (carries) => {
        if (carries) {
            return carries.filter((carrie) => carrie.CategoryGroupID === 4)
        }
        return null;
    }
);

export const selectOthersCarries = createSelector(
    selectAllCarries,
    (carries) => {
        if (carries) {
            return  carries.filter((carrie) => carrie.CategoryGroupID === 5)
        }
        return null;
    }
);

export const { setProductType } = catalogSlice.actions;

export default catalogSlice.reducer;