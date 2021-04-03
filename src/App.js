import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      
    <div className="Footer">
      Coded by{" "}
      <a href="https://github.com/hueyteng/dictionary-react-project" target="_blank" rel="noreferrer">
      Huey Teng Tay
      </a>
    </div>

      </div>
    </div>
      
  );
}

export default App;
