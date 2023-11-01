import Input from "@/components/input/Input";
import PinInput from "@/components/input/PasswordInput";
import { ILoginModel } from "@/model/authModel";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm<ILoginModel>();

  return (
    <form className="flex w-full flex-col gap-6">
      <Input
        id="email"
        label="Email"
        type="text"
        placeholder="Enter your email"
        haveError={!!errors.email}
        errorMessage={errors.email?.message}
        isRequired={true}
      >
        {register("email", {
          required: {
            value: true,
            message: "Cannot be empty!!",
          },
        })}
      </Input>
      <PinInput
        id="password"
        label="Password"
        placeholder="Enter you password"
        haveError={!!errors.password}
        errorMessage={errors.password?.message}
        isRequired={true}
      >
        {register("password", {
          required: {
            value: true,
            message: "Cannot be empty!!",
          },
          setValueAs: (value) => (value ? value.trim() : ""),
        })}
      </PinInput>
    </form>
  );
}
export default LoginForm;
