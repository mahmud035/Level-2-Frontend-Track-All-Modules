import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center text-center">
      <div className="border border-purple-300 rounded-md bg-slate-50 p-10">
        <span className="block mb-4 text-emerald-500 font-medium text-2xl">
          {count}
        </span>

        <button
          onClick={() => dispatch(increment())}
          className="bg-cyan-500 px-3 py-2 rounded text-white font-medium mr-3"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-orange-500 px-3 py-2 rounded text-white font-medium mr-3"
        >
          Decrement
        </button>

        {/* Payload */}
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-cyan-500 px-3 py-2 rounded text-white font-medium mr-3"
        >
          IncrementBy 5
        </button>
        <button
          onClick={() => dispatch(decrementByAmount({ value: 5 }))}
          className="bg-orange-500 px-3 py-2 rounded text-white font-medium mr-3"
        >
          DecrementBy 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
