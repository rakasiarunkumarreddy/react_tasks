import './App.css';
import {New} from "./task1.js/modify"
import Table from "./task2.js/table"
import Compo from "./task3.js/compo"
import Portfolio from "./task4.js/portfolio"
import Main from './task5.js/main';
import Tables from "./task6.js/Bootstrap_tabes"
import Parent from './propdrilling/parentCompo';
import Counter from "./task7/counter"
import Form from './task8/forms';
import EvenOddChecker from './task9/evenodd';
import Todolist from './task10/todolist';
import UpdatedState from "./task11/SpinnerRemovalonUpdate"
import UpdatedStateTask from "./task12/UpdateState"
import FuncCounter from './task13/funcCounter';
import Calculator from './task14/calculator';
function App() {
  return (
    <div className="App" style={{fontFamily:"Times New Roman"}}>
      <New/>
      <Table/>
      <Compo/>
      <Portfolio/>
      <Main/>
      <Tables/>
      <Parent/>
      <Counter/>
      <Form/>
      <EvenOddChecker/>
      <Todolist/>
      <UpdatedState/>
      <UpdatedStateTask/>
      <FuncCounter/>
      <Calculator/>
    </div>
  );
}

export default App;
