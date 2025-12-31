{/* Replace: So the user cannot press back and return to a protected page after redirect.*/ }
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
