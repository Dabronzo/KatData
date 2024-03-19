import React from 'react';
import SaveChartIcon from '../../../../../icons/SaveChartIcon';
import PDFDownloadIcon from '../../../../../icons/PDFDownloadIcon';
import CSVDownloadIcon from '../../../../../icons/CSVDownloadIcon';
import { useAppSelector } from '../../../../../hooks';
import { chartBuilderSelector } from '../../../store/builderSlice';

type Props = {
    download: () => void;
}


const ActionButtons = ({download}:Props) => {

    const chartToSave = useAppSelector(chartBuilderSelector);

    const handleSaveChart = () => {
        if (!chartToSave?.error)
        console.log(chartToSave?.chart)
    };




    return (
        <div className='flex space-x-4 cursor-pointer items-center justify-center absolute bottom-[80px] right-[28px]'>
            <button
                type="button"
                onClick={download}
                >
                    <PDFDownloadIcon  />
            </button>
            <button
                type="button"
                onClick={download}
                >
                    <CSVDownloadIcon />
                </button>
            <button
                type="button"
                onClick={handleSaveChart}
                >
                    <SaveChartIcon />
            </button>
        </div>
        
    )
};

export default ActionButtons;