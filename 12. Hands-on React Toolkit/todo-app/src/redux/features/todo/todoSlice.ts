import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

type TInitialState = {
  todos: TTodo[];
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: TInitialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
