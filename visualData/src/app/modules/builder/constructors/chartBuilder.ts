import { nanoid } from "@reduxjs/toolkit";
import { Chart, ChartBuilderResponse, DataChip } from "../../../types/builder";

class ChartBuilder {

    private chart: Chart = {
        id: nanoid(),
        title: 'My First Chart',
        chips: [],

    }
    constructor(private xAxisChips: DataChip[]) {}

    private setChartChips() {
        this.chart.chips = this.xAxisChips;
    }

    build(): ChartBuilderResponse {
        if (this.xAxisChips.length === 0) return { error: 'Add a energy carrier to the X-Axis'}
        this.setChartChips();
        return { chart: this.chart };
    }
}

export default ChartBuilder;