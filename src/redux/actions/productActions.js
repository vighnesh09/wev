import { createAsyncThunk } from "@reduxjs/toolkit";
import shopApi from "@/services/api/shop";

export const getAllPerfumeList = createAsyncThunk(
  "products/getAllPerfumeList",
  async (data, { rejectWithValue }) => {
    try {
      const response = await shopApi.getAllPerfumeListApi(data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
) 