import { nanoid } from "@reduxjs/toolkit";
import { ChartBuilderResponse, ChartTypes, DataChip } from "../../../types/builder";
import { DashboardChart, VisualizationTypes } from "../../../types/dashboard";

class ChartBuilder {

    private chart: DashboardChart = {
        id: nanoid(),
        title: '',
        toggleValues: false,
        type: VisualizationTypes.POINT,
        chartType: ChartTypes.LINE,
        chips: [],
        url: ''
    }
    constructor(private xAxisChips: DataChip[], private chartTitle: string, private chartType: ChartTypes, private toggle: boolean, private url: string | null) {}

    private setChartChips() {
        this.chart.chips = this.xAxisChips;
    }

    private setChartToggleValues() {
        this.chart.toggleValues = this.toggle;
    }

    private setChartTitle() {
        this.chart.title = this.chartTitle;
    }

    private setChartType() {
        this.chart.chartType = this.chartType;
    }

    private setChartUrl() {
        if (this.url)
        this.chart.url = this.url;
    }

    build(): ChartBuilderResponse {
        if (this.xAxisChips.length === 0) return { error: 'Add a energy carrier to the X-Axis'}
        if (!this.url) return {error: 'No url was found'}
        this.setChartChips();
        this.setChartTitle();
        this.setChartToggleValues();
        this.setChartType();
        this.setChartUrl();
        return { chart: this.chart };
    }
}

export default ChartBuilder;