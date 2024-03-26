import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({  children }) => {
    return (
        <div className="bg-gray-900 h-screen flex flex-col">
            {/* Header */}
            <div className="bg-gray-300 p-4 mt-4 mb-2 mx-4 rounded-md">
                {children[0]}
            </div>
            {/* Main Content */}
            <div className="flex flex-1">
                {/* Content Container */}
                <div className="w-full bg-gray-300 p-4 my-2 mx-4 rounded-md">
                    {children[1]}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;