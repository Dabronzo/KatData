 import { z } from 'zod';


export enum CarriesTypes {
    COAL = "E006461",
    OIL = "E006534",
    SUN = "E006590",
    WIND = "E006588",
    NATURAL_GAS = "E006560",
    WATER = "E006587",
    BIOMASS = "E006566",
    NUCLEAR = "E006602"
}

export enum TimeStamp {
    YEARLY = 'Years',
}

//=================================== CHIP ==================================

export const dataChipSchema = z.object({
    id: z.string(),
    verboseName: z.string(),
    dataValue: z.string(),
    color: z.string(),
    dataType: z.string(),
    timeStamp: z.nativeEnum(TimeStamp).optional(),
});

export type DataChip = z.infer<typeof dataChipSchema>;

//========================================= CHART ==============================

export enum ChartTypes {
    LINE = 'scatter',
    BAR = 'bar',
    AREA = 'area'
}

const chartSchema = z.object({
    id: z.string(),
    title: z.string(),
    chips: z.array(dataChipSchema),
});

const plotAxisLayout = z.object({
    title: z.object({
        text: z.string()
    })
})

const plotLayoutSchema = z.object({
    width: z.number(),
    height: z.number(),
    title: z.string(),
    plot_bgcolor: z.string(),
    paper_bgcolor: z.string(),
    xaxis: plotAxisLayout.optional(),
    yaxis: plotAxisLayout.optional(),
});


export type PlotChartLayout = z.infer<typeof plotLayoutSchema>;

export type Chart = z.infer<typeof chartSchema>;

export type ChartBuilderResponse = {
    chart?: Chart,
    error?: string,
}


export type BuilderContainer = {
    lines: DataChip[],
    chartTitle: string,
    toogleValues: boolean,
    chartType: ChartTypes,
};

export type SelectorBuilderResponse = {
    chart: Chart | null,
    error: string | null
}

//========================== DND =============================//

export enum DragType {
    DATACHIP = 'Datachip'
}

export interface DragItem {
    data: DataChip,
    className: string,
}
