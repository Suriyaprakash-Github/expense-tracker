import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
describe("Home Component", () => {
  test("renders simplify as a text", () => {
    render(
      <>
        <Home />
      </>
    );

    const helloWorldElement = screen.getByText("Features", { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders simplify as a text", () => {
    render(
      <>
        <Home />
      </>
    );

    const helloWorldElement = screen.getByText("simplify", { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });
});
