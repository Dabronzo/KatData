import React, { useEffect, useRef, useState,  } from "react";
import Plot from 'react-plotly.js';
import { useAppSelector } from "../../../../../hooks";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {  chartTitleSelector, chartTypeSelector, toggleValuesSelector, } from "../../../store/builderSlice";
import { ChartTypes } from "../../../../../types/builder";
import ActionButtons from "./ActionButtons";
import { ChartData } from "../../../../../types/data";
import { Layout } from "plotly.js";

type Props = {
    data: ChartData[],
}

const PointerChart = ({ data }: Props) => {

    const layout: Partial<Layout> = {};


    // const data = useAppSelector(chartDataSelector);
    const chartTitle = useAppSelector(chartTitleSelector);
    const toggleValues = useAppSelector(toggleValuesSelector);
    const chartType = useAppSelector(chartTypeSelector);



    

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const plotRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = () => {
        if (plotRef.current) {
            // Use HTML2Canvas to capture the content of the Plotly chart
            html2canvas(plotRef.current).then(canvas => {
                // Convert the canvas to a data URL
                const imageDataUrl = canvas.toDataURL('image/png');

                // Create a jsPDF instance
                const pdf = new jsPDF();

                // Add the image to the PDF
                pdf.addImage(imageDataUrl, 'PNG', 10, 10, 190, 100); // Adjust the coordinates and dimensions as needed

                // Save or open the PDF
                pdf.save('chart.pdf'); // change here for the name of the chart!
            });
        }
    };

    


    useEffect(() => {
        const updateDimensions = () => {
            if (plotRef.current) {
                const { width, height } = plotRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        // Initial dimensions
        updateDimensions();

        // Event listener for window resize
        window.addEventListener('resize', updateDimensions);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);


    layout.width = dimensions.width;
    layout.height = dimensions.height;
    layout.title = chartTitle;

    layout.xaxis = {
        title: {
            text: 'Years',
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#3b3d40'
            }
        },
        type: 'date',
        autorange: true,
        range: [
            "1996",
            "2023"
        ]
    };

    layout.yaxis = {
        title: {
            text: 'Production of Energy',
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#3b3d40'
            }
        },
        autorange: true,
        // range: yRange,
    }


    return (
        <div ref={plotRef} style={{ width: '100%', height: '100%' }}>
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
                <ActionButtons download={handleDownloadPDF} />
    </div>
    )
};


export default PointerChart;