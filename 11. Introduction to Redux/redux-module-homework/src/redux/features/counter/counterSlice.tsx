import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CounterStateType = {
  count: number;
};

const initialState: CounterStateType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count = state.count - action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
