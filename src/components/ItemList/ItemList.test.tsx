import { render, screen } from "@testing-library/react";
import ItemList from "./ItemList";

describe("ItemList", () => {
  it("renders the component", async () => {
    const itemListText = "First Item";
    render(<ItemList>{itemListText}</ItemList>);

    expect(await screen.findByText(itemListText)).toBeVisible();
    expect(await screen.findByRole("checkbox")).toBeVisible();
    expect(await screen.findByRole("button", { name: /done/i })).toBeVisible();
  });
});
