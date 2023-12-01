type Props = {
  children: string;
};

export default function ItemList({ children }: Props) {
  return (
    <li>
      <input type="checkbox" />
      {children}
      <button>Done</button>
    </li>
  );
}
