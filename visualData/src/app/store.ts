import { configureStore } from "@reduxjs/toolkit";
import builderReducers from "./modules/builder/store/store";

const store = configureStore({
    reducer: {
        builder: builderReducers,
    }
});

// exporting type for the RootState of the store
export type RootState = ReturnType<typeof store.getState>;

// exporting the dispatch
export type AppDispatch = typeof store.dispatch;

export default store;