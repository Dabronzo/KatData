import { EntityState } from '@reduxjs/toolkit';
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

export enum EnergyType {
    ELETRICITY = 'Eletricity',
    HEAT = 'Heat',
    BOTH = 'Both'
}

export enum TimeStamp {
    YEARLY = 'Years',
}

//=================================== CHIP ==================================

const dataChipSchema = z.object({
    id: z.string(),
    verboseName: z.string(),
    dataValue: z.string(),
    color: z.string(),
    unity: z.nativeEnum(EnergyType).optional(),
    dataType: z.string(),
    timeStamp: z.nativeEnum(TimeStamp).optional(),
});

export type DataChip = z.infer<typeof dataChipSchema>;

//========================================= CHART ==============================

const chartSchema = z.object({
    id: z.string(),
    title: z.string(),
    chips: z.array(dataChipSchema),
});

export type Chart = z.infer<typeof chartSchema>;

export type ChartBuilderResponse = {
    chart?: Chart,
    error?: string,
}

type Selection = EntityState<DataChip, string>



export type BuilderContainer = {
    selection: Selection,
    xAxis: DataChip[],
    yAxis: DataChip[],
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
