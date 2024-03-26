import React, { useEffect, useRef, useState } from 'react';

type Props = {
    resizeTrigger: boolean,
    resizeFinished: boolean,
};

const TestChart = ({resizeFinished, resizeTrigger}:Props) => {

    
    const plotRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
    }, [resizeTrigger, resizeFinished]);


    return (
       <div ref={plotRef} style={{ width: '100%', height: '100%'}}>
         <div className='bg-black w-full h-full'>
            Banana
        </div>
       </div>
    )
};


export default TestChart;