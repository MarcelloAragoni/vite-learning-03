type Props = {
  children: string;
  onClose?: () => void;
};

export default function ItemList({ children, onClose }: Props) {
  return (
    <li>
      <input type="checkbox" />
      {children}
      <button onClick={onClose}>Delete</button>
    </li>
  );
}
