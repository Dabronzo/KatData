import { configureStore } from "@reduxjs/toolkit";
import builderReducers from "./modules/builder/store/store";
import dashboardReducers from "./modules/dashboard/store/store";

const store = configureStore({
    reducer: {
        builder: builderReducers,
        dashboard: dashboardReducers
    }
});

// exporting type for the RootState of the store
export type RootState = ReturnType<typeof store.getState>;

// exporting the dispatch
export type AppDispatch = typeof store.dispatch;

export default store;