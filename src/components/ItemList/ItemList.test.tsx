import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemList from "./ItemList";

describe("ItemList", () => {
  it("renders the component", async () => {
    const itemListText = "First Item";
    render(<ItemList>{itemListText}</ItemList>);

    expect(await screen.findByText(itemListText)).toBeVisible();
    expect(await screen.findByRole("checkbox")).toBeVisible();
    expect(await screen.findByRole("button", { name: /done/i })).toBeVisible();
  });

  it("Calls onClick", async () => {
    const onClickMock = vi.fn();
    render(<ItemList onClose={onClickMock}>Test</ItemList>);

    await userEvent.click(await screen.findByRole("button", { name: /done/i }));
    expect(onClickMock).toBeCalled();
  });
});
