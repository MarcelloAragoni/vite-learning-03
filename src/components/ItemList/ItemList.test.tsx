import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemList from "./ItemList";
import { Item } from "../TodoList/TodoList";

describe("ItemList", () => {
  it("renders the component", async () => {
    const item: Item = {
      id: 1,
      value: "First Item",
      done: false,
    };

    const itemListText = "First Item";
    render(<ItemList item={item} onComplete={() => {}} />);

    expect(await screen.findByText(itemListText)).toBeVisible();
    expect(await screen.findByRole("checkbox")).toBeVisible();
    expect(
      await screen.findByRole("button", { name: /delete/i }),
    ).toBeVisible();
  });

  it("Calls onClick", async () => {
    const item: Item = {
      id: 1,
      value: "First Item",
      done: false,
    };
    const onClickMock = vi.fn();
    render(
      <ItemList item={item} onDelete={onClickMock} onComplete={() => {}} />,
    );

    await userEvent.click(
      await screen.findByRole("button", { name: /delete/i }),
    );
    expect(onClickMock).toBeCalled();
  });
});
