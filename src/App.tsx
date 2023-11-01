import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <div className="app flex w-full h-screen">
      <div className="w-full  lg:w-1/2">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-primary-500">mbn</span>Connect
          </div>
        </div>

        <div className="flex items-center justify-center">
          <LoginPage />
        </div>
      </div>
      <div className=" hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-primary-500 to-primary-200 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10  backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default App;
