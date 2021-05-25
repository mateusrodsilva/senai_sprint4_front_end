import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Consumindo API do GitHub
        </p>
        <a
          className="App-link"
          href="https://localhost:3000/github_info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listando informações de um usuário do GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
