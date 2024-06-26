import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Inventory } from "../../pages/Inventory/Inventory";
import { Orders } from "../../pages/Orders/Orders";
import { Customers } from "../../pages/Customers/Customers";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
};
