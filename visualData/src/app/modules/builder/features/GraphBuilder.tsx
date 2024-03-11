import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";
import Catalog from "./catalog/components/Catalog";
import SelectContainer from "./containers/SelectionContainer";
import LineContainer from "./containers/LineContainer";
import DragLayer from "../../common/components/DragLayers";



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
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;