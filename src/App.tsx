import { useAppSelector } from "./app/hooks";
import { Status } from "./enum/common";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { status: isLoggedIn } = useAppSelector((state) => state.token);
  return (
    <>
      <div className="app flex w-full h-screen">
        {isLoggedIn === Status.Succeeded && (
          <>
            <Dashboard />
          </>
        )}
        <>
          <AppRoutes />
        </>
        {/* <LoginPage /> */}
      </div>
    </>
  );
}

export default App;
