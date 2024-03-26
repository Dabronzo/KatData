import { combineReducers } from "@reduxjs/toolkit";
import dashboardStore from "./dashboardStore";
import dashboardData from "./dashboardData";


const dashboardReducers = combineReducers({
    containers: dashboardStore,
    data: dashboardData,
});

export default dashboardReducers;