import { useForm } from "react-hook-form";
import Input from "./input";
import { StoryFn } from "@storybook/react";

export default {
  title: "ui/Input",
  component: Input,
};

const Template: StoryFn = (args) => {
  const { register } = useForm();

  return (
    <Input
      type={args.type}
      label={"sample"}
      register={register}
      required={true}
      placeholder={args.placeholder}
    />
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "sample text input placeholder",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "sample number input placeholder",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "sample password input placeholder",
};
