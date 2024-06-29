import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import inventoryReducer from "./inventorySlice";
import ordersReducer from "./ordersSlice";
import customersReducer from "./customersSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    orders: ordersReducer,
    customers: customersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
