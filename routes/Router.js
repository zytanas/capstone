import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import Orders from "../pages/Orders";
import Returns from "../pages/Returns";
import Contacts from "../pages/Contacts";
import Users from "../pages/Users";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/return" element={<Returns />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/user" element={<Users />} />
    </Routes>
  );
};

export default Router;