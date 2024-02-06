import './App.css';
import React, {useState} from 'react'
import * as Tone from 'tone';
import { Piano } from './components/Piano.js';
import { RootSelector } from './components/RootSelector.js';
import { ModeSelector } from './components/ModeSelector.js';
import { ScaleSelector } from './components/ScaleSelector.js';

function App() {

  let [keyRoot, setKeyRoot] = useState("C");
  function handleRoot(newRoot) {
    setKeyRoot(newRoot);
  }
  let [keyMode, setKeyMode] = useState("Ionian");
  function handleMode(newMode) {
    setKeyMode(newMode);
  }
  let [keyScale, setKeyScale] = useState(["C", "D", "E", "F", "G", "A", "B"]);
  function handleScale(newScale){
    setKeyScale(newScale);
  }

  return (
    <div className="App">
        <h1 className="indicator-wrapper">{keyRoot} {keyMode}</h1>
        <RootSelector root = {keyRoot} changeRoot = {handleRoot}/>
        <div className='scale-mode-wrapper'>
          <ScaleSelector root = {keyRoot} mode = {keyMode} changeScale={handleScale}/>
          <ModeSelector mode = {keyMode} changeMode = {handleMode}/>
        </div>
    </div>
  );
}

export default App;
