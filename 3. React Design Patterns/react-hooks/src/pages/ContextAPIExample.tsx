import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

const ContextAPIExample = () => {
  const themeContext = useContext(ThemeContext);

  // check if themeContext is defined
  if (!themeContext) {
    return null;
  }

  // get the values provided by ThemeContext
  const { dark, setDark } = themeContext;

  return (
    <div
      className={`h-full w-full flex justify-center items-center  ${
        dark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div>
        <h1 className="text-2xl font-semibold">Context API</h1>

        <button onClick={() => setDark(!dark)} className="btn btn-accent">
          {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default ContextAPIExample;
