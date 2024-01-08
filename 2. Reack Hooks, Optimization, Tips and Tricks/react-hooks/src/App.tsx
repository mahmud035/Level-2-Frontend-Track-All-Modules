// import { useState } from 'react';
// import UseStateExample from './pages/UseStateExample';
// import StateLiftingExample from './pages/StateLiftingExample';
// import UseStateExampleForm from './pages/UseStateExampleForm';

import UseReducerExample from './pages/UseReducerExample';

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* <UseStateExample /> */}
      {/* <StateLiftingExample counter={counter} setCounter={setCounter} /> */}
      {/* <UseStateExampleForm /> */}

      <UseReducerExample />
    </div>
  );
}

export default App;
