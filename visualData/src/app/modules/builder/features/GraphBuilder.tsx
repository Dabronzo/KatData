import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";
import Catalog from "./catalog/components/Catalog";
import LineContainer from "./containers/LineContainer";
import PreviewContainer from "./preview/PreviewContainer";
import ChartTitle from "./options/ChartTitle";
import { useAppDispatch } from "../../../hooks";
import { fetchEnergyCatalog } from "./catalog/store/thunk";




const GraphBuilder = () => {
    
    const dispatch = useAppDispatch();
    dispatch(fetchEnergyCatalog());

    return (
        <GraphBuilderLayout>
            <div>
                <Catalog />
                <LineContainer />
                <ChartTitle />
            </div>
            <div>
                <PreviewContainer />
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;