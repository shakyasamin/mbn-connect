import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { UseFormRegisterReturn } from "react-hook-form";

import InvalidMessage from "../error/InvalidMessage";
import RequiredIcon from "@/RequiredIcon";

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

  const showPinHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <section className="flex gap-1">
        <label htmlFor={id} className="fw-semibold font-[600] tracking-wide">
          {label}&nbsp;
          {isRequired && <RequiredIcon />}
        </label>

        <InvalidMessage toShow={haveError} message={errorMessage} />
      </section>

      <section className="flex items-center justify-center rounded-md border border-gray-300 px-[0.75rem] py-[0.3rem] text-center focus-within:border-primary-500">
        <input
          id={id}
          placeholder={placeholder}
          className="w-full border-none bg-[#FFFFFF] p-0 focus:outline-none"
          type={showPassword ? type : "password"}
          {...children}
        />

        <i
          role="button"
          className="cursor-pointer text-lg"
          onClick={showPinHandler}
        >
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </i>
      </section>
    </div>
  );
}
export default PasswordInput;
