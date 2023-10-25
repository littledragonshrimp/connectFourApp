import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";

import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import Grid from "./components/Grid";
import Slot from "./components/Slot";
import Nav from "./Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="gameContainer">
        <Player1 />
        <Grid />
        <Player2 />
      </div>
      <Slot />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
