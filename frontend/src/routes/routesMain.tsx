import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashBoardPage } from "../pages/dashboard";
import { ProtectedRoutes } from "./prodectroutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashBoardPage />} />
      </Route>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
