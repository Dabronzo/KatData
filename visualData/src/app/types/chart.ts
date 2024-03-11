import { z } from 'zod';
  

export enum ChartType {
    LINE = 'scatter',
}

const lineSchema = z.object({
    color: z.string(),
    widith: z.number(),
});



const chartDataSchema = z.object({
    type: z.nativeEnum(ChartType),
    x: z.array(z.number()),
    y: z.array(z.number()),
    name: z.string(),
    line: lineSchema,
});

export type ChartData = z.infer<typeof chartDataSchema>;

export type ChartDataSlice = {
    chartId: string | null;
    data: ChartData[];
    status: string | null;
}

const cbsValueResponseSchema = z.object({
    ID: z.number(),
    CentraleDecentraleProductie: z.string(),
    Energiedragers: z.string(),
    Perioden: z.string(),
    ElektriciteitTJ_3: z.number().nullable(),
})

export const cbsDataResponseSchema = z.object({
    "odata.metadata": z.string(),
    value: z.array(cbsValueResponseSchema)
});


export type CbsDataResponse = z.infer<typeof cbsDataResponseSchema>;
