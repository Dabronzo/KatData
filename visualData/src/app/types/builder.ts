import { EntityState } from '@reduxjs/toolkit';
import { z } from 'zod';



export enum EnergyType {
    ELETRICITY = 'Eletricity',
    HEAT = 'Heat',
    BOTH = 'Both'
}




const dataChipSchema = z.object({
    id: z.string(),
    verboseName: z.string(),
    dataValue: z.string(),
    color: z.string(),
    unity: z.nativeEnum(EnergyType),
    dataType: z.string(),
});

export type DataChip = z.infer<typeof dataChipSchema>;

type Selection = EntityState<DataChip, string>



export type BuilderContainer = {
    selection: Selection,
    xAxis: DataChip[],
    yAxis: DataChip[],
}
