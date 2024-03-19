import { EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { DashboardContainer } from "../../../types/dashboard";

type ContainerEntity = EntityState<DashboardContainer, string>;

const containerAdapters = createEntityAdapter({
    selectId: (container: DashboardContainer) => container.id
})

export type DashboardStoreType = {
    containers: ContainerEntity | [],
};

const initialState: DashboardStoreType = {
    containers: containerAdapters.getInitialState(),
};


const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
    },
});


export default dashboardSlice.reducer;

