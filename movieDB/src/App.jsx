import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MovieList } from "./components/movieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row justify-center">
        <h1 className="text-2xl content-center self-center">Powered by: </h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Popular Movies</h1>
      <div className="card">
        <MovieList />
      </div>
    </>
  );
}

export default App;
