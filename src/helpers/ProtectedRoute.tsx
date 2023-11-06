import Spinner from "@/components/Spinner";
import { Status } from "@/enum/common";
import useAuth from "@/hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn === Status.Failed) return <Navigate to="/login" replace />;
  if (isLoggedIn == Status.Succeeded) return <Outlet />;

  return <Spinner text="Loading..." />;
}
