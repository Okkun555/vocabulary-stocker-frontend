type Props = {
  text: string;
  disabled?: boolean;
};

export default function SubmitButton(props: Props) {
  const { text, disabled = false } = props;

  const buttonClassName = disabled
    ? "bg-gray-300 text-white font-bold py-2 px-4 rounded-full"
    : "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full";

  return (
    <button className={buttonClassName} type="submit" disabled={disabled}>
      {text}
    </button>
  );
}
