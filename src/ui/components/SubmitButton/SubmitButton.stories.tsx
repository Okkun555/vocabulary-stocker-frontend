import { ComponentMeta } from "@storybook/react";
import SubmitButton from ".";

export default {
  title: "SubmitButton",
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>;

export const Disabled = () => {
  return <SubmitButton text="送信" disabled={true} />;
};

export const Enabled = () => {
  return <SubmitButton text="送信" disabled={false} />;
};
