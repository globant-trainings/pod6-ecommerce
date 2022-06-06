import logo from "./logo.svg";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pagination getItems={() => console.log("refetched")} />
      </header>
    </div>
  );
}

export default App;
