import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { UseFormRegisterReturn } from "react-hook-form";

import RequiredIcon from "@/RequiredIcon";
import InvalidMessage from "../error/InvalidMessage";

interface IInput {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  haveError: boolean;
  errorMessage: string | undefined;
  isRequired: boolean;
  children: UseFormRegisterReturn<string>;
}

function PasswordInput({
  label,
  id,
  type,
  placeholder,
  haveError,
  errorMessage,
  isRequired,
  children,
}: IInput) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col gap-1 self-start text-base">
      <section className="flex gap-1">
        <label htmlFor={id} className="font-semibold tracking-wide">
          {label}&nbsp;
          {isRequired && <RequiredIcon />}
        </label>

        <InvalidMessage toShow={haveError} message={errorMessage} />
      </section>

      <section className="flex items-center justify-center rounded-md border border-gray-300  px-3 py-[0.375rem] text-center focus-within:border-primary-500">
        <input
          id={id}
          placeholder={placeholder}
          className="w-full outline-none p-0 focus:outline-none"
          type={showPassword ? type : "password"}
          {...children}
        />

        <i
          role="button"
          className="cursor-pointer text-lg"
          onClick={showPasswordHandler}
        >
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </i>
      </section>
    </div>
  );
}
export default PasswordInput;
