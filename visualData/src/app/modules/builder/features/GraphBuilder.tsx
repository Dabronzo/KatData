import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";
import Catalog from "./catalog/components/Catalog";
import LineContainer from "./containers/LineContainer";
import PreviewContainer from "./preview/PreviewContainer";
import ChartTitle from "./options/ChartTitle";
import { useAppDispatch } from "../../../hooks";
import { fetchEnergyCatalog } from "./catalog/store/thunk";
import ToggleButton from "./options/componetns/ToggleValues";



const GraphBuilder = () => {
    
    const dispatch = useAppDispatch();
    dispatch(fetchEnergyCatalog());

    return (
        <GraphBuilderLayout>
            <div>
                <h1>Left Container</h1>
                <Catalog />
                <LineContainer />
                <ChartTitle />
                <ToggleButton />
            </div>
            <div>
                <h1>Right Container</h1>
                <PreviewContainer />
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;