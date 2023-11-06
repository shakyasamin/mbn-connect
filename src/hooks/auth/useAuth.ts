import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { verifyToken } from "@/pages/Login/feature/tokenSlice";

export default function useAuth() {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.token);

  const checkLoggedIn = async () => {
    await dispatch(verifyToken());
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);
  return { isLoggedIn: status };
}
