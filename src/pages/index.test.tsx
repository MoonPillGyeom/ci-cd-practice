import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "./index";

describe("Page", () => {
  it("renders the page", () => {
    render(<Index />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
