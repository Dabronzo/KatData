import React, { useEffect, useRef, useState } from "react";
import Plot from 'react-plotly.js';
import { useAppSelector } from "../../../../hooks";
import { chartDataSelector } from "./store/chartData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";




const PointerChart = () => {

    const data = useAppSelector(chartDataSelector);
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
                pdf.save('chart.pdf');
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




    // if (data.length === 0 ) {
    //     console.lo
    //     return null;
    // }

    console.log('the data', data)

    return (
        <div ref={plotRef} style={{ width: '100%', height: '100%' }}>
            {data.length > 0 && (
                <button type="button" onClick={handleDownloadPDF}>
                    Donwload
                </button>
            )}
        {data.length > 0 ? (
            <Plot
                data={data.map(i => ({
                    x: i.x,
                    y: i.y,
                    name: i.name,
                    type: i.type,
                    line: {
                        color: i.line.color,
                        width: i.line.width
                    }
                }))}
                layout={{
                    width: dimensions.width,
                    height: dimensions.height,
                    title: 'A Fancy Plot'
                    // Add other layout properties as needed
                }}
            />
        ) : (
            <div>Processing...</div>
        )}
    </div>
    )
};


export default PointerChart;