import './App.css';
import * as Tone from 'tone';
import { Piano } from './components/Piano.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Piano />
      </header>
    </div>
  );
}

export default App;
