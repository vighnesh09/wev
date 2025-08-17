import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "@/redux/reducers/productReducer";

const combineReducer = {
  shop: shopSlice,
};

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: combineReducer,
});