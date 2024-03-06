import {z} from 'zod';


// calling on this endpoint
// https://opendata.cbs.nl/ODataApi/odata/80030ned/Energiedragers
const energyCarrieSchema = z.object({
    'odata.metadata': z.string(),
    value: z.array(z.object({
        Key: z.string(),
        Title: z.string(),
        Description: z.string(),
        CategoryGroupID: z.number()
    }))
});

export type EnergyCarrier = z.infer<typeof energyCarrieSchema>;