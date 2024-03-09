import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";
import Catalog from "./catalog/components/Catalog";
import SelectContainer from "./containers/SelectionContainer";
import XAxisContianer from "./containers/XAxisContainer";
import YAxisContainer from "./containers/YAxisContainer";



const GraphBuilder = () => {

    return (
        <GraphBuilderLayout>
            <div>
                <h1>Left Container</h1>
                <Catalog />
                <SelectContainer />
                <XAxisContianer />
                <YAxisContainer />
            </div>
            <div>
                <h1>Right Container</h1>
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;