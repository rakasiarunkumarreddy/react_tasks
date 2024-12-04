import './App.css';
import {New} from "./task1.js/modify"
import Table from "./task2.js/table"
import Compo from "./task3.js/compo"
import Portfolio from "./task4.js/portfolio"
import Main from './task5.js/main';
import Tables from "./task6.js/Bootstrap_tabes"
import Parent from './propdrilling/parentCompo';
import Counter from "./task7/counter"

function App() {
  return (
    <div className="App">
      <New/>
      <Table/>
      <Compo/>
      <Portfolio/>
      <Main/>
      <Tables/>
      <Parent/>
      <Counter/>
    </div>
  );
}

export default App;
