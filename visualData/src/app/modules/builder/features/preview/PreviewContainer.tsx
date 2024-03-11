import React from "react";
import { useAppSelector } from "../../../../hooks";
import { chartBuilderSelector } from "../../store/builderSlice";
import ChartPreview from "../chart/ChartPreview";



const PreviewContainer = () => {

    const chartResponse = useAppSelector(chartBuilderSelector);

    return (
        <div className="mt-2 mx-2">
            {chartResponse?.error && (
                <div className="py-2 px-2 bg-slate-400 text-black">
                    <strong>{chartResponse.error}</strong>
                </div>
            )}
            {chartResponse?.chart && (
                <div className="py-2 px-2 bg-slate-400 text-black">
                   <ChartPreview />
                </div>
            )}
        </div>
    )
};

export default PreviewContainer;