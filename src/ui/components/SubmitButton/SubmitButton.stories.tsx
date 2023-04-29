import { ComponentMeta } from "@storybook/react";
import SubmitButton from ".";

export default {
  title: "SubmitButton",
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

export const Primary = () => {
  return <SubmitButton text="送信" />;
};
