import { useForm } from "react-hook-form";
import Input from "./input";

export default {
  title: "ui/Input",
  component: Input,
};

const Template = () => {
  const { register } = useForm();

  return <Input label={"sample"} register={register} required={true} />;
};

export const SimpleTextInput = Template.bind({});
