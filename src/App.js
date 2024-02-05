import './App.css';
import React, {useState} from 'react'
import * as Tone from 'tone';
import { Piano } from './components/Piano.js';
import { RootSelector } from './components/RootSelector.js';
import { ModeSelector } from './components/ModeSelector.js';

function App() {

  let [keyRoot, setKeyRoot] = useState("C");
  function handleRoot(newRoot) {
    setKeyRoot(newRoot);
  }
  let [keyMode, setKeyMode] = useState("ionian");
  function handleMode(newMode) {
    setKeyMode(newMode);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="indicator-wrapper">{keyRoot} {keyMode}</h1>
        <RootSelector root = {keyRoot} changeRoot = {handleRoot}/>
        <ModeSelector mode = {keyMode} changeMode = {handleMode}/>
        <Piano />
      </header>
    </div>
  );
}

export default App;
