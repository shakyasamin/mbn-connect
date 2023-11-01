import LoginForm from "./LoginForm";

const LoginLeft = () => {
  return (
    <div className="w-full flex items-center justify-center lg:w-1/2">
      {/* <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-primary-500">mbn</span>Connect
          </div>
        </div> */}

      <div className="flex items-center justify-center">
        <div className="bg-white px-10 py-10 rounded-2xl border-gray-200">
          <div className="text-center font-bold mb-6">
            <span className="text-primary-500">mbn</span>Connect
          </div>
          <h1 className="text-3xl text-center font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter your details.
          </p>
          <div className="mt-6">
            <LoginForm />
            <div className="mt-6 flex justify-center items-center">
              <p className="font-medium text-base">Don't have an account?</p>
              <button className="text-primary-500 text-base font-medium ml-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
