import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [luba, setLuba] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Free by Florence and the machines is a good song</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
            setLuba((luba) => luba + 2 * count);
          }}
        >
          count is {count}={luba}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMRs
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
