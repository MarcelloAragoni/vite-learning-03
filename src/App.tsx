import "./App.css";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return <ItemList onClose={() => console.log("teste")}>Test</ItemList>;
}

export default App;
