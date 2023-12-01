import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render the initial test", async () => {
    render(<App />);

    expect(await screen.findByText("test")).toBeVisible();
  });
});
