import './App.css';
import {New} from "./task1.js/modify"
import Table from "./task2.js/table"
import Compo from "./task3.js/compo"
import Portfolio from "./task4.js/portfolio"

function App() {
  return (
    <div className="App">
      <New/>
      <Table/>
      <Compo/>
      <Portfolio/>
    </div>
  );
}

export default App;
