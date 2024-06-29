import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export type CustomersSliceState = {
  items: Customer[];
  loading: boolean;
  error: string | null;
  customersQuantity: number;
};

const fetchCustomersData: AsyncThunk<Customer[], void, {}> = createAsyncThunk(
  "customers/fetchCustomersData",
  async () => {
    const response = await axios.get(
      "https://667e6f9af2cb59c38dc5a7b1.mockapi.io/customers"
    );
    return response.data as Customer[];
  }
);

const initialState: CustomersSliceState = {
  items: [],
  loading: false,
  error: null,
  customersQuantity: 0,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCustomersData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.customersQuantity = state.items.length;
      })
      .addCase(fetchCustomersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch customers";
      });
  },
});

export const {} = customersSlice.actions;

export default customersSlice.reducer;

export { fetchCustomersData };
