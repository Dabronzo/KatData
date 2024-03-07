import { z } from 'zod';


const dataChipSchema = z.object({
    verboseName: z.string(),
    dataValue: z.string(),
    color: z.string(),
    unity: z.string(),
    dataType: z.string(),
});

const builderContainersSchema = z.object({
    selection: z.array(dataChipSchema),
    xAxis: z.array(dataChipSchema),
    yAxis: z.array(dataChipSchema),
});



export type DataChip = z.infer<typeof dataChipSchema>;
export type BuilderContainer = z.infer<typeof builderContainersSchema>;