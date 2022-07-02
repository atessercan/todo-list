import Card from "./components/UI/Card/Card";
import CardClasses from "./components/UI/Card/Card.module.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card className={CardClasses.Card} />
    </div>
  );
}

export default App;
