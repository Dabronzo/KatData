import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";
import Catalog from "./catalog/components/Catalog";
import SelectContainer from "./containers/SelectionContainer";
import LineContainer from "./containers/LineContainer";
import DragLayer from "../../common/components/DragLayers";
import PreviewContainer from "./preview/PreviewContainer";



const GraphBuilder = () => {

    return (
        <GraphBuilderLayout>
            <div>
                <h1>Left Container</h1>
                <Catalog />
                <SelectContainer />
                <LineContainer />
                <DragLayer />
            </div>
            <div>
                <h1>Right Container</h1>
                <PreviewContainer />
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;