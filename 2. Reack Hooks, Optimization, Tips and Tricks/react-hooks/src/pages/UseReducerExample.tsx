import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: currentState.count + 1,
      };
    case 'DECREMENT':
      return {
        count: currentState.count - 1,
      };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  console.log('Render');

  return (
    <div>
      <h1>useReducer</h1>
      <h2 className="text-2xl font-semibold">{state.count}</h2>

      <button className="btn btn-success" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-accent" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
