// import { Layout } from 'plotly.js';
import React, {  useEffect, useRef, useState } from 'react';
import Plot from 'react-plotly.js';
import { ChartData } from '../../../../types/data';
import { ChartTypes } from '../../../../types/builder';
import { DashboardChart } from '../../../../types/dashboard';
import { useResizeDetector } from 'react-resize-detector';


type Props = {
    data: ChartData[],
    chart: DashboardChart,
    id: string,
    resizeTrigger: boolean,
    resizeFinished: boolean,
};



const DashboardChartPreview = ({data, chart, resizeTrigger, resizeFinished,}: Props) => {
    const {title, chartType, toggleValues} = chart;
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    // const plotRef = useRef<HTMLDivElement>(null);
    const { width, height, ref } = useResizeDetector({ 
        // refreshMode: 'debounce', 
        // refreshRate: 1000
      })

    const layout = {
        title,
        width: width,
        height: height,
    };

    // useEffect(() => {
    //     const updateDimensions = () => {
    //         if (plotRef.current) {
    //             const { width, height } = plotRef.current.getBoundingClientRect();
    //             setDimensions({ width, height });
    //         }
    //     };

    //     // Initial dimensions
    //     updateDimensions();

    //     // Event listener for window resize
    //     window.addEventListener('resize', updateDimensions);

    //     // Cleanup
    //     return () => {
    //         window.removeEventListener('resize', updateDimensions);
    //     };
    // }, [resizeTrigger]);

  

    // useEffect(() => {
    //     layout.width = width;
    // }, [resizeFinished]);

    return (
        <div ref={ref} className='w-full h-full'>
            <Plot
                data={data.map(item => ({
                    x: item.x,
                    y: item.y,
                    name: item.name,
                    fill: chartType === ChartTypes.AREA ? 'tozeroy' : undefined,
                    type: chartType === ChartTypes.BAR ? 'bar' : 'scatter',
                    line: {
                        color: item.line.color,
                        width: item.line.width
                    },
                    text: toggleValues ? item.y.map(String) : undefined,
                    mode: (toggleValues && (ChartTypes.LINE || ChartTypes.AREA)) ? 'text+lines+markers' : 'lines+markers',
                    hoverinfo: toggleValues ? 'x' : 'x+y',
                    textposition: 'top center',
                    marker: {
                        size: 8,
                        color: item.line.color,
                    }
                }))}
                layout={layout}
                config={{
                    displaylogo: false,
                    displayModeBar: false
                }}
                // onUpdate={(e) => console.log('this', e)}
            />
        </div>
    );
};


export default DashboardChartPreview;