import { useState } from "react";
import ItemList from "../ItemList/ItemList";

export type Item = {
  id: number;
  value: string;
  done: boolean;
};

type Props = {
  list: Item[];
};

export default function TodoList({ list }: Props) {
  const [updatedList, setUpdatedList] = useState(list);

  function handleComplete(item: Item) {
    const newListCopy = [...updatedList];
    const itemIndex = newListCopy.findIndex(({ id }) => item.id === id);

    newListCopy[itemIndex].done = !item.done;

    setUpdatedList(newListCopy);
  }

  return (
    <>
      <h1>title</h1>
      <ul>
        {updatedList.map((item) => (
          <ItemList onComplete={handleComplete} item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
