import { EntityState } from '@reduxjs/toolkit';
import {z} from 'zod';

const carrieSchema = z.object({
    Key: z.string(),
    Title: z.string(),
    Description: z.string(),
    CategoryGroupID: z.number()
})


// calling on this endpoint
// https://opendata.cbs.nl/ODataApi/odata/80030ned/Energiedragers
export const carriesResponseSchema = z.object({
    'odata.metadata': z.string(),
    value: z.array(carrieSchema),
});

export type CatalogItem = z.infer<typeof carrieSchema>;

export enum EnergyType {
    ELETRICITY = 'ElektriciteitTJ_3',
    HEAT = 'WarmteTJ_5',
    BOTH = 'Both'
}

const productItemSchema = z.object({
    title: z.string(),
    value: z.nativeEnum(EnergyType),
});

export type ProductItem = z.infer<typeof productItemSchema>;


type CatalogEntity = EntityState<CatalogItem, string>;


// App Catalog
export type CatalogStore = {
    carries: CatalogEntity | null,
    productType: ProductItem,
    status: string,
}

export type CarriesResponse = z.infer<typeof carriesResponseSchema>;
