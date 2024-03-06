import React from "react";
import GraphBuilderLayout from "./layout/GraphBuilderLayout";



const GraphBuilder = () => {

    console.log('heua');
    return (
        <GraphBuilderLayout>
            <div>
                <h1>Left Container</h1>
            </div>
            <div>
                <h1>Right Container</h1>
            </div>
        </GraphBuilderLayout>
    )
};

export default GraphBuilder;