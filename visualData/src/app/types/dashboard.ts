import z from 'zod';
import { ChartTypes, dataChipSchema } from './builder';

export enum VisualizationTypes {
    POINT = 'point'
}

const dashboardChartSchema = z.object({
    id: z.string(),
    title: z.string(),
    type: z.nativeEnum(VisualizationTypes),
    toggleValues: z.boolean(),
    chartType: z.nativeEnum(ChartTypes),
    chips: z.array(dataChipSchema),
    url: z.string(),
});


export type DashboardChart = z.infer<typeof dashboardChartSchema>;

const dashboardContainer = z.object({
    id: z.string(),
    x: z.number(),
    y: z.number(),
    widith: z.number(),
    height: z.number(),
    chart: dashboardChartSchema,
})

export type DashboardContainer = z.infer<typeof dashboardContainer>;


