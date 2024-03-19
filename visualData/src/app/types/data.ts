import { z } from 'zod';
  

export enum DataType {
    LINE = 'scatter',
}

const lineSchema = z.object({
    color: z.string(),
    width: z.number(),
});



export const chartDataSchema = z.object({
    type: z.nativeEnum(DataType),
    x: z.array(z.string()),
    y: z.array(z.number()),
    name: z.string(),
    line: lineSchema,
});

export type ChartData = z.infer<typeof chartDataSchema>;

export type ChartDataSlice = {
    data: ChartData[];
    status: string | null;
    url: string;
}

const cbsValueResponseSchema = z.object({
    ID: z.number(),
    CentraleDecentraleProductie: z.string(),
    Energiedragers: z.string(),
    Perioden: z.string(),
    ElektriciteitTJ_3: z.number().nullable().optional(),
    WarmteTJ_5: z.number().nullable().optional(),
})

export const cbsDataResponseSchema = z.object({
    "odata.metadata": z.string(),
    value: z.array(cbsValueResponseSchema)
});


export type CbsDataResponse = z.infer<typeof cbsDataResponseSchema>;
