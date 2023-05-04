import { render, screen } from "@testing-library/react";
import SubmitButton from ".";

test("ボタンの表示", () => {
  render(<SubmitButton text="検索" disabled={true} />);
  expect(screen.getByText("検索")).toBeInTheDocument();
});
