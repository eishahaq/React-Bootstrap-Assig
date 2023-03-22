import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { TestButton } from './Components/Buttons';
import { PrimaryCard } from './Components/Cards';


function App() {
  return (
    <div className="App">
      React App Demo
      <header className="App-header">
      <TestButton buttonName={"Weekend"}/>
      <TestButton buttonName={"My End"}/>
      <PrimaryCard cardTitle={"Hello"}cardImage={"cardexampleimage.jpg"}/>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
