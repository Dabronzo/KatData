import React from 'react';
import CrossIcon from '../../../../icons/CrossIcon';


const GraphBuilderHeader = () => {


    return (
        <div className="bg-gray-300 h-16 rounded-md flex items-center justify-between p-4 mx-4 mt-4">
                {/* Add header content here */}
                <strong>Graph Builder - (2 Axis)</strong>
                {/* Icons */}
                <button type="button" className={`cursor-pointer items-center justify-center bg-gray-200 text-gray-800 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-gray-200`}>
                        <CrossIcon width={20} height={20} />
                </button>
            </div>
    )
};

export default GraphBuilderHeader;