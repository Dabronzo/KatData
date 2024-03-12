import { Chart } from "../../../types/builder";
import { CbsDataResponse, ChartData, ChartType } from "../../../types/chart"


function adaptRawDataToPlotlyData(rawData: CbsDataResponse, chart: Chart) {
    const plotlyData: ChartData[] = [];
  
    chart.chips.forEach(chip => {
      const filteredData = rawData.value.filter(entry => entry.Energiedragers === chip.dataValue);
  
      if (filteredData.length > 0) {
        const xValues = filteredData.map(entry => entry.Perioden);


        const yValues = filteredData.map((entry) => {
            if (!entry.ElektriciteitTJ_3 || entry.ElektriciteitTJ_3 === null) {
                return 0
            } else {
                return entry.ElektriciteitTJ_3;
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
