import React from 'react';
import DashboardLayout from './features/layout/DashboardLayout';
import DashboardContent from './features/content/DashboardContent';


const Dashboard = () => {

    return (
        <DashboardLayout>
            <div>
                Header
            </div>
            <div>
               <DashboardContent />
            </div>
        </DashboardLayout>
    )
};

export default Dashboard;

