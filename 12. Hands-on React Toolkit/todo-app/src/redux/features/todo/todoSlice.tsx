import { createSlice } from '@reduxjs/toolkit';

export type TodoStateType = {
  todo: [];
};

const initialState: TodoStateType = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
