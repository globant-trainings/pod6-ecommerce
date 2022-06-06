import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      <MainPage />
      <Pagination getItems={() => console.log("refetched")} />
    </div>
  );
}

export default App;
