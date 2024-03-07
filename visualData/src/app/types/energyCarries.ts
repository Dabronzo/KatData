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

export type CarriesResponse = z.infer<typeof carriesResponseSchema>;
export type CatalogItem = z.infer<typeof carrieSchema>;