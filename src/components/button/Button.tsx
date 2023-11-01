interface IButton {
  title: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClickHandler?: () => void;
}

function Button({ title, type = "button", onClickHandler }: IButton) {
  return (
    <button
      className=" active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all mx-1 my-2 w-full rounded bg-primary-500 px-4  py-2 text-sm tracking-wider text-primary-50
                
            "
      type={type}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
}

export default Button;
