import logo from './logo.svg';
import './App.css';

function App() {
  const style = {
    color: 'green',
    border: 10
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto Final de React (en construcción).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style = {style}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
