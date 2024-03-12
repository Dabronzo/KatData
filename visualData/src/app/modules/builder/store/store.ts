import { combineReducers } from "@reduxjs/toolkit";
import catalogSlice from "../features/catalog/store/catalogSlice";
import builderSlice from "./builderSlice";
import chartData from "../features/chart/store/chartData";


const builderReducers = combineReducers({
    catalog: catalogSlice,
    builder: builderSlice,
    chart: chartData,
});

export default builderReducers;