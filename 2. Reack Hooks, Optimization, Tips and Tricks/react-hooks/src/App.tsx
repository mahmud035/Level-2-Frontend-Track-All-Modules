// import { useState } from 'react';
// import UseStateExample from './pages/UseStateExample';
// import StateLiftingExample from './pages/StateLiftingExample';
import UseStateExampleForm from './pages/UseStateExampleForm';

function App() {
  // const [counter, setCounter] = useState(0);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* <UseStateExample /> */}
      {/* <StateLiftingExample counter={counter} setCounter={setCounter} /> */}
      <UseStateExampleForm />
    </div>
  );
}

export default App;
