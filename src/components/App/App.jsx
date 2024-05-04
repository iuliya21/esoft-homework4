import UserList from "../ UserList/ UserList";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import WindowSize from "../WindowSize/WindowSize";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <CountdownTimer />
      <UserList />
      <WindowSize />
    </div>
  );
}

export default App;
