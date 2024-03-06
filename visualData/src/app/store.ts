import { configureStore } from "@reduxjs/toolkit";
import builderSlice from "./modules/builder/store/builderSlice";

const store = configureStore({
    reducer: {
        builder: builderSlice,
    }
});

// exporting type for the RootState of the store
export type RootState = ReturnType<typeof store.getState>;

// exporting the dispatch
export type AppDispatch = typeof store.dispatch;

export default store;