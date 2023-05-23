import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
  placeholder?: string;
};

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { label, register, required, placeholder = "" } = props;

  return (
    <input
      {...register(label)}
      type="text"
      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      required={required}
      placeholder={placeholder}
    />
  );
};

export default Input;
