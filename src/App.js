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
        <Dictionary defaultKeyword="mountain" />
      </main>
      
    <div className="Footer">
      <a href="https://github.com/hueyteng/dictionary-react-project" target="_blank" rel="noreferrer">
      Open source code{" "}
      </a>{" "}
      by {" "}
      <a href="https://www.linkedin.com/in/huey-teng-tay-44509367/" target="_blank" rel="noreferrer">
      Huey Teng Tay
      </a>{" "}
      
      <br />
      
      <small>Background image by{" "}
      <a href="https://www.freepik.com/rawpixel-com" target="_blank" rel="noreferrer">
        rawpixel.com
        </a></small>
  </div>
      </div>
    </div>
      
  );
}

export default App;
