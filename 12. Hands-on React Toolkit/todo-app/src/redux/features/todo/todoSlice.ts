import { createSlice } from '@reduxjs/toolkit';

type TodoStateType = {
  todos: [];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: TodoStateType = {
  todos: [],
  isLoading: false,
  isError: false,
  error: '',
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
