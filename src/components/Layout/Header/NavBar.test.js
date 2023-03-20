import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router-dom";

import NavBar from "./NavBar";

test("renders simplify as a text", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const hello = screen.getByText("tracker", { exact: false });

  expect(hello).toBeInTheDocument();
});
