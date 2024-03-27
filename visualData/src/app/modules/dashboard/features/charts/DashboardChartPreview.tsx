import React from 'react';
import Plot from 'react-plotly.js';
import { ChartData } from '../../../../types/data';
import { ChartTypes } from '../../../../types/builder';
import { DashboardChart } from '../../../../types/dashboard';
import { useResizeDetector } from 'react-resize-detector';


type Props = {
    data: ChartData[],
    chart: DashboardChart,
};



const DashboardChartPreview = ({data, chart}: Props) => {
    const {title, chartType, toggleValues} = chart;
    const { width, height, ref } = useResizeDetector({ 
        // refreshMode: 'debounce', 
        // refreshRate: 1000
      })

    const layout = {
        title,
        width: width,
        height: height,
        // margin: {
        //     t: 10,
        // }
    };


    return (
        <div ref={ref} className='w-full h-full plot-shabang'>
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
            />
        </div>
    );
};


export default DashboardChartPreview;