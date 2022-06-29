import Card from "./components/UI/Card/Card";

import "./App.css";

function App() {
 
  return (
    <div className="App">
      <Card cardType="header"/>
      <Card cardType="addTask"/>
      <Card cardType="taskList" />
    </div>
  );
}

export default App;
