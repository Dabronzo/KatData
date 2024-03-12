import React, { useEffect, useRef, useState } from "react";
import Plot from 'react-plotly.js';
import { useAppSelector } from "../../../../hooks";
import { chartDataSelector } from "./store/chartData";




const PointerChart = () => {

    const data = useAppSelector(chartDataSelector);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const plotRef = useRef<HTMLDivElement>(null);

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