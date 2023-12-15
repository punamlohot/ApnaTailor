import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/auth/Register";
import EnterOtp from "../pages/auth/Otp";
import Profile from "../pages/auth/Profile";
import Onboarding from "../pages/dashboard/Onboarding";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/otp" element={<EnterOtp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
};

export default AllRoutes;
