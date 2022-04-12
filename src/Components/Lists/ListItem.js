import { useDispatch } from "react-redux";
// import { useState } from "react";
import { taskActions } from "../../store/task-store";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const { id, description, completed } = props;
  const dispatch = useDispatch();

  const checkCompleteValidation = completed ? "check-true" : "check-false";
  const taskCompleteValidation = completed ? "task-true" : "task-false";

  const completeTaskHandler = (event) => {
    dispatch(taskActions.completeTask(id));
  };

  const removeTaskHandler = () => {
    dispatch(taskActions.removeFromList(id));
  };

  return (
    <div className={styles["list-item"]}>
      <div className={styles.description}>
        <div
          className={styles[checkCompleteValidation]}
          onClick={completeTaskHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        </div>
        <li className={styles[taskCompleteValidation]}>{description}</li>
      </div>
      <div className={styles.remove} onClick={removeTaskHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ListItem;
