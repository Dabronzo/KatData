import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CbsDataResponse, cbsDataResponseSchema } from "../../../../../types/chart";



export const fetchChartData = createAsyncThunk<CbsDataResponse, string>(
    'chart/fetchChartData',
    async (args, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://opendata.cbs.nl/ODataFeed/odata/80030ned/TypedDataSet?%24filter=((Energiedragers%20eq%20%27E006560%27)%20or%20(Energiedragers%20eq%20%27E006461%27))&%24select=ID%2C%20CentraleDecentraleProductie%2C%20Energiedragers%2C%20Perioden%2C%20ElektriciteitTJ_3&%24format=json`);
  
        // Assuming your response structure is { data: YourDataType[] }
        const validData = cbsDataResponseSchema.safeParse(response.data);

        if (!validData.success) {
            return rejectWithValue('Invalid Data')
        }

 

        for (const item of validData.data.value) {
            
            if (item.Energiedragers === "E006560") {
                console.log('on the thunk', item)
            }
        }
        // Return the response data as the payload
        return validData.data;
      } catch (error) {
        console.error('error', error);
  
        // Return the error message using rejectWithValue
        return rejectWithValue('error');
      }
    }
  );