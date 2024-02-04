import './App.css';
import * as Tone from 'tone';
import { Piano } from './components/Piano.js';
import { RootSelector } from './components/RootSelector.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <RootSelector />
        <Piano />
      </header>
    </div>
  );
}

export default App;
