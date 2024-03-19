import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CbsDataResponse, cbsDataResponseSchema } from "../../../../../types/data";
import {  DataChip } from "../../../../../types/builder";

export type ChartThunkResponse = {
  data: CbsDataResponse;
  chips: DataChip[];
  url: string;
}

export const fetchChartData = createAsyncThunk<ChartThunkResponse, [string, DataChip[]]>(
    'chart/fetchChartData',
    async ([args, chips], { rejectWithValue }) => {
      try {
        const response = await axios.get(args);
  
        // Assuming your response structure is { data: YourDataType[] }
        const validData = cbsDataResponseSchema.safeParse(response.data);

        if (!validData.success) {
            return rejectWithValue('Invalid Data')
        }

        const thunkResponse: ChartThunkResponse = {
          data: validData.data,
          chips,
          url: args,
        }


        // Return the response data as the payload
        return thunkResponse;
      } catch (error) {
        console.error('error', error);
  
        // Return the error message using rejectWithValue
        return rejectWithValue('error');
      }
    }
  );


  