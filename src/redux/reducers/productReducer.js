import { createSlice } from "@reduxjs/toolkit";
import { getAllPerfumeList } from "@/redux/actions/productActions";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    loading: false,
    error: null,
    perfumeProductsList: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPerfumeList.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(getAllPerfumeList.fulfilled, (state, action) => {
      state.loading = false;
      state.perfumeProductsList = action.payload;
      state.success = true;
    });
    builder.addCase(getAllPerfumeList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});
export const {} = shopSlice.actions;
export default shopSlice.reducer;