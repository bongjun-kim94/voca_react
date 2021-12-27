import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <DayList />
        <Day />
      </div>
    </>
  );
}

export default App;
