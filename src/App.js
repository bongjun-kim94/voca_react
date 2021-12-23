import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Hello />
      <div className={styles.box}>App</div>
    </>
  );
}

export default App;
