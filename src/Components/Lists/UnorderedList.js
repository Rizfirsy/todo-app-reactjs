import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../store/task-store";
import ListItem from "./ListItem";
import styles from "./UnorderedList.module.css";

const List = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  let tasksContent = (
    <p className={styles["no-tasks"]}>You're really make it! You done!</p>
  );

  if (tasks.length > 0) {
    tasksContent = tasks.map((task) => (
      <ListItem
        key={task.id}
        id={task.id}
        description={task.description}
        completed={task.completed}
      />
    ));
  }

  const clearCompletedHandler = () => {
    dispatch(taskActions.clearCompleted());
  };

  const activeTasks = tasks.filter((task) => task.completed === false).length;

  const completeFilterHandler = (e) => {};
  const allFilterHandler = (e) => {};
  const activeFilterHandler = (e) => {};

  return (
    <ul className={styles.list}>
      {tasksContent}
      <div className={styles["list-navigation"]}>
        <p>{activeTasks} items left</p>
        <div className={styles["list-navigation-item"]}>
          <p onClick={allFilterHandler}>all</p>
          <p onClick={activeFilterHandler}>active</p>
          <p onClick={completeFilterHandler}>complete</p>
        </div>
        <p
          className={styles["clear-completed"]}
          onClick={clearCompletedHandler}
        >
          clear completed
        </p>
      </div>
    </ul>
  );
};

export default List;
