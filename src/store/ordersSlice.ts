import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface OrderItem {
  id: string;
  customerId: string;
  totalCost: number;
  date: string;
}

export type OrdersSliceState = {
  items: OrderItem[];
  loading: boolean;
  error: string | null;
  totalQuantity: number;
  totalRevenue: number;
};

const fetchOrdersData: AsyncThunk<OrderItem[], void, {}> = createAsyncThunk(
  "orders/fetchOrdersData",
  async () => {
    const response = await axios.get(
      "https://667e6f9af2cb59c38dc5a7b1.mockapi.io/orders"
    );
    return response.data as OrderItem[];
  }
);

const initialState: OrdersSliceState = {
  items: [],
  loading: false,
  error: null,
  totalQuantity: 0,
  totalRevenue: 0,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    calcOrderStats(state) {
      state.totalQuantity = state.items.length;
      state.totalRevenue = state.items.reduce(
        (acc, order) => acc + order.totalCost,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrdersData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.totalQuantity = action.payload.length;
        state.totalRevenue = action.payload.reduce(
          (acc, order) => acc + order.totalCost,
          0
        );
      })
      .addCase(fetchOrdersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});

export const { calcOrderStats } = ordersSlice.actions;

export default ordersSlice.reducer;

export { fetchOrdersData };
