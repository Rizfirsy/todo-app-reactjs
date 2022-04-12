import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/task-store";
import styles from "./NewTask.module.css";
import Header from "../Header/Header";

const NewTask = (props) => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const changeInputHandler = (event) => {
    setNewTask(event.target.value);
  };

  const addInputToListHandler = (event) => {
    if (event.code === "Enter" || event.code === "enter") {
      const enteredTask = {
        id: Math.random().toFixed(2),
        description: newTask,
        completed: false,
        status: "active",
      };
      dispatch(taskActions.addToList(enteredTask));
      setNewTask("");
    }
  };

  return (
    <div className={styles["new-task"]}>
      <Header />
      <div className={styles["add-new-task"]}>
        <div className={styles.check}></div>
        <input
          onKeyDown={addInputToListHandler}
          type="text"
          onChange={changeInputHandler}
          className={styles.userInput}
          placeholder="add new task"
          value={newTask}
        />
      </div>
    </div>
  );
};

export default NewTask;
