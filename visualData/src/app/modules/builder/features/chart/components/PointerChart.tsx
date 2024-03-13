import React, { useEffect, useRef, useState } from "react";
import Plot from 'react-plotly.js';
import { useAppSelector } from "../../../../../hooks";
import { chartDataSelector } from "../store/chartData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { chartTitleSelector, chartTypeSelector, toggleValuesSelector } from "../../../store/builderSlice";
import { useSelector } from "react-redux";
import { ChartTypes } from "../../../../../types/builder";




const PointerChart = () => {

    const data = useAppSelector(chartDataSelector);
    const chartTitle = useAppSelector(chartTitleSelector);
    const toggleValues = useAppSelector(toggleValuesSelector);
    const chartType = useSelector(chartTypeSelector);

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




    return (
        <div ref={plotRef} style={{ width: '100%', height: '100%' }}>
        {data.length > 0 ? (
            <Plot
                data={data.map(item => ({
                    x: item.x,
                    y: item.y,
                    name: item.name,
                    fill: chartType === ChartTypes.AREA ? 'tozeroy' : undefined,
                    type: chartType === ChartTypes.BAR ? 'bar': 'scatter',
                    line: {
                        color: item.line.color,
                        width: item.line.width
                    },
                    text: item.y.map(String),
                    mode: toggleValues ? 'text+lines+markers' : 'lines+markers',
                    hoverinfo:  toggleValues ? 'x' : 'x+y',
                    textposition: 'top center',
                    marker: {
                        size: 8,
                        color: item.line.color,
                    }
                }))}
                layout={{
                    width: dimensions.width,
                    height: dimensions.height,
                    title: chartTitle,
                    plot_bgcolor: '#e3e2de',
                    paper_bgcolor: '#e3e2de',
                    // Add other layout properties as needed
                }}
                config={{
                    displaylogo: false,
                    displayModeBar: false
                }}
            />
        ) : (
            <div>Processing...</div>
        )}
         {data.length > 0 && (
                <button type="button" onClick={handleDownloadPDF}>
                    Donwload
                </button>
            )}
    </div>
    )
};


export default PointerChart;