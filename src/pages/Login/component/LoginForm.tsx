import { useForm } from "react-hook-form";
import Input from "@/components/input/Input";
import { ILoginModel } from "@/model/authModel";
import Button from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginModel>({
    defaultValues: { email: "test@gmail.com", password: "Mypassword1!" },
  });

  const handleSubmits = () => {
    console.log("submitted");
  };
  return (
    <form
      className="flex w-full flex-col gap-6"
      onSubmit={handleSubmit(handleSubmits)}
    >
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
      <PasswordInput
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
      </PasswordInput>
      <div className=" flex justify-between">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 font-medium text-base">
            Remember me
          </label>
        </div>
        <button className="font-medium text-base text-primary-500">
          Forgot password?
        </button>
      </div>
      <Button type="submit" title=" Sign In" />
    </form>
  );
}
export default LoginForm;
