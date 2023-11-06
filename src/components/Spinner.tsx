interface SpinnerProps {
  text?: string;
  size: string;
  isLoading?: boolean;
}
const Spinner = ({
  isLoading = true,
  text = "Loading ..",
  size,
}: SpinnerProps) => {
  if (!isLoading) return null;

  const header = text ? <h4>{text}</h4> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
};

Spinner.defaultProps = {
  size: "5em",
};

export default Spinner;
