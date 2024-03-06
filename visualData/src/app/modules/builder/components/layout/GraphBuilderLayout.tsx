import React, { ReactNode } from "react";

type Props = {
    children: ReactNode[]; 
}


const GraphBuilderLayout = ({children}: Props) => {

    return (
        <div className="bg-gray-900 h-screen flex">
          <div className="w-1/3 bg-gray-300 p-4 m-4">
            {/* Content for the left container (2/3 of the screen) */}
            {children[0]}
          </div>
          <div className="w-2/3 bg-gray-300 p-4 m-4">
            {/* Content for the right container (1/3 of the screen) */}
            {children[1]}
          </div>
        </div>
      );
};

export default GraphBuilderLayout;