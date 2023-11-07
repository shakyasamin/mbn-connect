import { useAppDispatch } from "@/app/hooks";
import { ILoginModel } from "@/model/authModel";
import { loginUser } from "@/pages/Login/feature/loginRequest";
import { useNavigate } from "react-router-dom";

function useAuthApiRequest() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = async (loginData: ILoginModel) => {
    await dispatch(loginUser(loginData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((errorMessage) => {
        console.log(
          errorMessage.detail ||
            "You have entered an invalid email or password!!"
        );
      });
  };
  return { login } as const;
}
export default useAuthApiRequest;
