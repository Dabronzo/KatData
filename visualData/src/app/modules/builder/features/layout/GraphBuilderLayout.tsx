import React, { ReactNode } from "react";
import GraphBuilderHeader from "../header/GraphBuilderHeader";

type Props = {
    children: ReactNode[]; 
}


const GraphBuilderLayout = ({children}: Props) => {

    return (
      <div className="bg-gray-900 h-screen flex flex-col">
      {/* Header */}
      <GraphBuilderHeader />
      {/* Main Content */}
      <div className="flex flex-1">
          {/* Left Container */}
          <div className="w-1/3 bg-gray-300 p-4 ml-4 mr-1 my-4 rounded-md">
              {/* Content for the left container (2/3 of the screen) */}
              {children[0]}
          </div>
          {/* Right Container */}
          <div className="w-2/3 bg-gray-300 p-4 ml-4 mr-1 my-4  rounded-md">
              {/* Content for the right container (1/3 of the screen) */}
              {children[1]}
          </div>
      </div>
  </div>
      );
};

export default GraphBuilderLayout;