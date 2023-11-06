import LoginContainer from "@/pages/Login/LoginContainer";
import LoginPage from "@/pages/Login/LoginPage";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
