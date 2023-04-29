type Props = {
  text: string;
};

export default function SubmitButton(props: Props) {
  const { text } = props;

  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      type="submit"
    >
      {text}
    </button>
  );
}
