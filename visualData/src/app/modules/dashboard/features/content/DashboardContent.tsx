import React, { useRef, useState } from 'react';
import { Layout, Layouts, Responsive, WidthProvider } from 'react-grid-layout';
import { useAppSelector } from '../../../../hooks';
import { containersSelectors } from '../../store/dashboardStore';
import DashboardContainers from '../containers/DashboardContainers';
import { DashboardContainer } from '../../../../types/dashboard';
// import Plotly from 'plotly.js';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layoutBuilder = (containers: DashboardContainer[]) =>{
    const layout: Layouts = {
        'lg': [],
        'md': [],
        'sm':[]
    };

    containers.map((c) => {
        const container = {
            i: c.id,
            x: c.x,
            y: c.y,
            w: c.widith,
            h: c.height
        }
        layout.lg.push(container)
        layout.md.push(container)
        layout.sm.push(container)
    })
    return layout;
};

const DashboardContent = () => {

    const containers =  useAppSelector(containersSelectors);
    const [resizeTrigger, setResizeTrigger] = useState<boolean>(false);
    const [resizeFinish, setResizeFinished] = useState<boolean>(false);
    const gridRef = useRef<HTMLDivElement>(null);

    const [layouts, setLayout] = useState<Layouts>(layoutBuilder(containers));

    const handleLayout = (newLayout: Layout[]) => {
        const newLayouts = {
            'lg': newLayout,
            'md': newLayout,
            'sm': newLayout
        }

        setLayout(newLayouts);
    };





    return (
       <div ref={gridRef}>
         <ResponsiveGridLayout
            className='layout'
            layouts={layouts}
            onResize={() => setResizeTrigger(!resizeTrigger)}
            onResizeStop={(k) => {
                setResizeFinished(!resizeFinish);
                console.log('after resize', k)
            }}
            cols={{
                'lg': 12,
            }}
            onLayoutChange={(w) => handleLayout(w)}
        >
            {containers.map((container) =>
                <div key={container.id}>
                    <DashboardContainers container={container} trigger={resizeTrigger} finishedResize={resizeFinish} />
                </div>
            )}

        </ResponsiveGridLayout>
       </div>
    )
};

export default DashboardContent;