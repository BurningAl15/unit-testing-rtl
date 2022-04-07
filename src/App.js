import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} data-testid="image" className="App-logo" alt="logo" />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
