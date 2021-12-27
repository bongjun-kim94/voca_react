import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h3>props: properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
      <div className={styles.box}>App</div>
    </>
  );
}

export default App;
