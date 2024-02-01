import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="p-10 border border-purple-300 rounded bg-slate-50">
        <span className="block w-full mb-10 text-3xl font-semibold text-center text-teal-500">
          {count}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 font-medium text-white rounded bg-cyan-500"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 font-medium text-white bg-orange-500 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-3 py-2 font-medium text-white rounded bg-cyan-500"
          >
            Increment By 5
          </button>
          <button
            onClick={() => dispatch(decrementByAmount({ value: 5 }))}
            className="px-3 py-2 font-medium text-white bg-orange-500 rounded"
          >
            Decrement By 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
