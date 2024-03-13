import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CarriesResponse, carriesResponseSchema } from "../../../../../types/energyCarries";


export const fetchEnergyCatalog = createAsyncThunk<CarriesResponse>(
    'catalog/fetchCatalog',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('https://opendata.cbs.nl/ODataApi/odata/80030ned/Energiedragers');

            const validData = carriesResponseSchema.safeParse(response.data);

            if (!validData.success) {
                return rejectWithValue('Invalid catalog data')
            }

            return validData.data;

        } catch (e) {
           return rejectWithValue('Error in fetching data!')
        }
    }
)