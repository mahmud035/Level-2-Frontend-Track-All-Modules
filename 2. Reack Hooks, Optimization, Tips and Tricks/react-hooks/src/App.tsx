// import { useState } from 'react';
// import UseStateExample from './pages/UseStateExample';
// import StateLiftingExample from './pages/StateLiftingExample';
// import UseStateExampleForm from './pages/UseStateExampleForm';

// import UseReducerExample from './pages/UseReducerExample';
// import UseReducerExampleForm from './pages/UseReducerExampleForm';

import UseEffectExample from './pages/UseEffectExample';

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      {/* <UseStateExample /> */}
      {/* <StateLiftingExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseStateExampleForm /> */}

      {/* <UseReducerExample /> */}
      {/* <UseReducerExampleForm /> */}

      <UseEffectExample />
    </div>
  );
}

export default App;
