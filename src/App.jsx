import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Shopix</h1>
      <div className="card">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
