import { EntityState, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { DashboardChart, DashboardContainer } from "../../../types/dashboard";
import testChart from '../../../test/testDashboard.json';
import { RootState } from "../../../store";

type ContainerEntity = EntityState<DashboardContainer, string>;


// test container to initial state
const testContainer: DashboardContainer = {
    id: 'aaaa',
    x: 0,
    y: 0,
    widith: 4,
    height: 3,
    chart: testChart as DashboardChart
};
const testContainer2: DashboardContainer = {
    id: 'bbbb',
    x: 0,
    y: 0,
    widith: 4,
    height: 3,
    chart: testChart as DashboardChart
}


const containerAdapters = createEntityAdapter({
    selectId: (container: DashboardContainer) => container.id
})

export type DashboardStoreType = {
    containers: ContainerEntity,
};

const initialState: DashboardStoreType = {
    containers: containerAdapters.getInitialState({entities: {'aaaa': testContainer, 'bbbb': testContainer2}, ids: ['aaaa', 'bbbb'] }),
};


const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
    },
});


export const containersSelectors = (state: RootState) => containerAdapters.getSelectors().selectAll(state.dashboard.containers.containers);



export default dashboardSlice.reducer;


