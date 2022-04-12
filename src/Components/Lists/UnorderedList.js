import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../store/task-store";
import ListItem from "./ListItem";
import styles from "./UnorderedList.module.css";

const List = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const clearCompletedHandler = () => {
    dispatch(taskActions.clearCompleted());
  };
  console.log(tasks.map((task) => console.log(task.status)));

  const activeTasks = tasks.filter((task) => task.completed === false).length;

  const allFilterHandler = () => {
    dispatch(taskActions.allFilter());
  };

  const completeFilterHandler = () => {
    dispatch(taskActions.completeFilter());
  };

  const activeFilterHandler = () => {
    dispatch(taskActions.activeFilter());
  };

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
        />
      ))}
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
