import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList, { Item } from "./TodoList";

const listMock: Item[] = [
  {
    id: 1,
    value: "teste 1",
    done: false,
  },
  {
    id: 2,
    value: "teste 2",
    done: false,
  },
];

describe("", () => {
  it("Renders the component", async () => {
    render(<TodoList list={[...listMock]}></TodoList>);

    expect(await screen.findByRole("heading")).toBeVisible();
    expect(await screen.findByRole("list")).toBeVisible();
    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });

  it("checks item list to Done", async () => {
    render(<TodoList list={[...listMock]}></TodoList>);

    await userEvent.click(await screen.findByLabelText(/Teste 1/i));

    expect(await screen.findByText(/Done/i)).toBeVisible();
  });

  it("checks if there are two itens done", async () => {
    render(<TodoList list={[...listMock]}></TodoList>);

    await userEvent.click(await screen.findByLabelText(/Teste 1/i));
    screen.debug(await screen.findByLabelText(/Teste 1/i));
    expect(await screen.findByText(/Done/i)).toBeVisible();
  });
});
