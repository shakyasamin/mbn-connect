import { Navigate, Outlet } from "react-router-dom";

import { Status } from "@/enum/common";
import useAuth from "@/hooks/auth/useAuth";

export default function LoginContainer() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === Status.Succeeded) return <Navigate to="/" replace />;

  return <Outlet />;
}
