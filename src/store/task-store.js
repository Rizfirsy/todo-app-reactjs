import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addToList(state, action) {
      state.tasks.unshift(action.payload);
    },
    removeFromList(state, action) {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    completeTask(state, action) {
      //recieve an id to identify which task should be marked
      const id = action.payload;
      //find the task based on the id
      const existingItem = state.tasks.find((task) => task.id === id);
      existingItem.completed = !existingItem.completed;
      existingItem.status = "complete";
    },
    clearCompleted(state) {
      const uncompleted = state.tasks.filter(
        (task) => task.completed === false
      );
      state.tasks = uncompleted;
    },
    allFilter(state) {},
    completeFilter(state, action) {},
    activeFilter(state, action) {},
  },
});

console.log(initialTasks.tasks);

export const taskActions = taskSlice.actions;

export default taskSlice;
