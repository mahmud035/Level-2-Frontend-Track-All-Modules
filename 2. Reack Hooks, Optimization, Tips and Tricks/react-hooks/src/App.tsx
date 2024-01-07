import { useState } from 'react';
import StateLiftingExample from './pages/StateLiftingExample';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      {/* <UseStateExample /> */}
      <StateLiftingExample counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
