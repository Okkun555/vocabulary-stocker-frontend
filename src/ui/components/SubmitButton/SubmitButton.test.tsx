import { render, screen } from "@testing-library/react";
import SubmitButton from ".";

describe("Submit Button Component", () => {
  test("ボタンの表示", () => {
    render(<SubmitButton text="検索" />);
    expect(screen.getByText("検索")).toBeInTheDocument();
  });

  test("ボタンが活性の場合、ボタンを押下できる", () => {
    render(<SubmitButton text="検索" disabled={false} />);
    expect(screen.getByTestId("submit-button")).toBeEnabled();
  });

  test("非活性の場合、ボタンを押下できない", () => {
    render(<SubmitButton text="検索" disabled={true} />);
    expect(screen.getByTestId("submit-button")).toBeDisabled();
  });
});
