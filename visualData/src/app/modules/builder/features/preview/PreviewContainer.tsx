import React from "react";
import { useAppSelector } from "../../../../hooks";
import { xAxisSelector } from "../../store/builderSlice";
import ChartPreview from "../chart/components/ChartPreview";
import { productTypeSelector } from "../catalog/store/catalogSlice";
import ChartTypeSelection from "../options/componetns/ChartTypeSelection";



const PreviewContainer = () => {

    const lineChips = useAppSelector(xAxisSelector);
    const productType = useAppSelector(productTypeSelector);

    return (
        <div className="mt-2 mx-2 h-[700px]">
            {lineChips.length > 0 && (
                <div className="py-2 px-2 bg-slate-400 text-black">
                    <ChartTypeSelection />
                   <ChartPreview lineChips={lineChips} product={productType} />
                </div>
            )}
        </div>
    )
};

export default PreviewContainer;