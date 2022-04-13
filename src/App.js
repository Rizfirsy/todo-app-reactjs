import styles from "./App.module.css";
import Background from "./Components/Background/Background";
import List from "./Components/Lists/UnorderedList";
import NewTask from "./Components/New Task/NewTask";

function App() {
  return (
    <div className="App">
      <Background />
      <div className={styles.main}>
        <NewTask />
        {}
        <List />
      </div>
    </div>
  );
}

export default App;
