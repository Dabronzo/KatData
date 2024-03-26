import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartThunkResponse } from "../../builder/features/chart/store/thunk";
import { DataChip } from "../../../types/builder";
import axios from "axios";
import { cbsDataResponseSchema } from "../../../types/data";


export const fetchDashboardData = createAsyncThunk<ChartThunkResponse, [string, DataChip[]]>(
    'dashboard/fetchDashboardData',
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