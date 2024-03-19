import { combineReducers } from "@reduxjs/toolkit";
import dashboardStore from "./dashboardStore";


const dashboardReducers = combineReducers({
    containers: dashboardStore,
});

export default dashboardReducers;