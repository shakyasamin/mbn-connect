interface InvalidMessageProps {
  toShow: boolean;
  message: string | undefined;
}

function InvalidMessage({ toShow, message }: InvalidMessageProps) {
  if (!toShow) return null;

  return <div className="text-red-700 tracking-wide self-end">{message}</div>;
}
export default InvalidMessage;
