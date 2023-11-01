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

function Input({
  label,
  id,
  type = "text",
  haveError,
  placeholder,
  errorMessage,
  isRequired,
  children,
}: IInput) {
  return (
    <div className="flex w-full flex-col gap-1 self-start text-base">
      <section className="flex gap-1">
        <label htmlFor={id} className="font-semibold tracking-wide">
          {label}&nbsp;
          {isRequired && <RequiredIcon />}
        </label>
        <InvalidMessage toShow={haveError} message={errorMessage} />
      </section>
      <input
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-[0.375rem]
                    outline-none focus:ring-1 focus:ring-primary-500 "
        autoComplete="nope"
        placeholder={placeholder}
        id={id}
        type={type}
        {...children}
      />
    </div>
  );
}
export default Input;
