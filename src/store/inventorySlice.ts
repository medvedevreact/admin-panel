import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface InventoryItem {
  id: string;
  photo: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  brand: string;
  category: string;
}

type InventorySliceState = {
  items: InventoryItem[];
  loading: boolean;
  error: string | null;
  totalQuantity: number;
};

export const fetchInventoryData = createAsyncThunk<
  InventoryItem[],
  void,
  {
    rejectValue: string;
  }
>("inventory/fetchInventoryData", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "https://667e6f9af2cb59c38dc5a7b1.mockapi.io/inventory"
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Ошибка при загрузке данных");
  }
});

const initialState: InventorySliceState = {
  items: [],
  loading: false,
  error: null,
  totalQuantity: 0,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventoryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventoryData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.totalQuantity = action.payload.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
      })
      .addCase(fetchInventoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке данных";
      });
  },
});

export const {} = inventorySlice.actions;

export default inventorySlice.reducer;
