import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Assuming you created AuthContext

const ProtectedRoute = ({ element: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
