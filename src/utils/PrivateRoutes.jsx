import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const isTokenValid = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  };

  console.log("Protected Route ");

  return token && isTokenValid(token) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
