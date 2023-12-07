import { Item } from "../TodoList/TodoList";

type Props = {
  item: Item;
  onDelete?: () => void;
  onComplete: (item: Item) => void;
};

export default function ItemList({ item, onDelete, onComplete }: Props) {
  return (
    <li>
      <label>
        <input onChange={() => onComplete(item)} type="checkbox" />
        {item.value}
        {item.done && <span>Done</span>}
      </label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
