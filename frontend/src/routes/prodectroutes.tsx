import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

export function ProtectedRoutes() {
  const navigate = useNavigate();
  const token = localStorage.getItem("@token");

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return <>{token ? <Outlet /> : null}</>;
}
