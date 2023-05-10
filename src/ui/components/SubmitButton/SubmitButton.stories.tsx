import SubmitButton from ".";

export default {
  title: "ui/SubmitButton",
  component: SubmitButton,
};

export const Disabled = {
  args: {
    text: "送信",
    disabled: true,
  },
};

export const Enabled = {
  args: {
    text: "送信",
    disabled: false,
  },
};
