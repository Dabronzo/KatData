import {  DataChip } from "../../../types/builder";
import { CbsDataResponse, ChartData, ChartType } from "../../../types/chart"


function adaptRawDataToPlotlyData(rawData: CbsDataResponse, chips: DataChip[]) {
    const plotlyData: ChartData[] = [];
  
    chips.forEach(chip => {
      const filteredData = rawData.value.filter(entry => entry.Energiedragers === chip.dataValue);
  
      if (filteredData.length > 0) {
        const xValues = filteredData.map(entry => {
          const value = entry.Perioden.substring(0, 4);
          return value;
        });


        const yValues = filteredData.map((entry) => {
            if (entry.WarmteTJ_5 === null || entry.ElektriciteitTJ_3 === null) {
                return 0
            } else if (entry.ElektriciteitTJ_3) {
                return entry.ElektriciteitTJ_3;
            } else if (entry.WarmteTJ_5) {
              return entry.WarmteTJ_5;
            } else {
              return 0;
            }
        });
  
        const chartEntry: ChartData = {
          type: ChartType.LINE, // Replace YOUR_CHART_TYPE with the actual chart type
          x: xValues,
          y: yValues,
          name: chip.verboseName,
          line: {
            color: chip.color,
            width: 2, // You can adjust the width as needed
          },
        };
        console.log(chartEntry);
  
        plotlyData.push(chartEntry);
      }
    });
  
    return plotlyData;
}

export default adaptRawDataToPlotlyData;
