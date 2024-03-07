import { combineReducers } from "@reduxjs/toolkit";
import catalogSlice from "../features/catalog/store/catalogSlice";
import builderSlice from "./builderSlice";

const builderReducers = combineReducers({
    catalog: catalogSlice,
    builder: builderSlice
});

export default builderReducers;