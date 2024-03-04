import './App.css';
import carpetBg from './images/carpet-bg.jpg';
import metalBg from './images/metal-bg.jpg';
import React, {useState, useRef, useEffect } from 'react';
import * as Tone from 'tone';
import RootSelector from './components/RootSelector.js';
import ModeSelector from './components/ModeSelector.js';
import ScaleSelector from './components/ScaleSelector.js';
import SettingsSelector from './components/SettingsSelector.js';

function App() {

  // Track Root note
  let [keyRoot, setKeyRoot] = useState("C");
  function handleRoot(newRoot) {
    setKeyRoot(newRoot);
  }
  // Track scale Mode
  let [keyMode, setKeyMode] = useState("Ionian");
  function handleMode(newMode) {
    setKeyMode(newMode);
  }
  // Track notes in key for scale indicator
  let [keyScale, setKeyScale] = useState(["C","D","E","F","G","A","B","C"]);
  function handleScale(newScale){
    setKeyScale(newScale);
  }
  // Track notes associated to an octave for synthesizer
  let [synthScale, setSynthScale] = useState(["C3","D3","E3","F3","G3","A3","B3","C4"]);
  function handleSynthScale(newSynthScale){
    setSynthScale(newSynthScale);
  }

  // Track scale octave and bpm for synthesizer
  let [octave, setOctave] = useState(3);
  function handleOctave(newOctave) {
    setOctave(newOctave);
  }
  let [bpm, setBpm] = useState(120);
  function handleBpm(newBpm) {
    setBpm(newBpm);
    Tone.Transport.bpm.value = newBpm;
  }

  let [isPlaying, setIsPlaying] = useState(true);
  function handlePlaying(set) {
    setIsPlaying(set);
  }

  // Build array of notes for synthesizer by adding an 'octave' number to the notes. (C# => C#3)
  const ScaleForSynth = (scale, oct) => {
    let synth = [];
    var i;
    for(i = 0 ; i < 8 ; i++){
        // Increment octave if scale crosses over a C or C#, but only once if the C# was preceded by a C in the given scale
        if(i !== 0 && (scale[i] === "C" || (scale[i] === "C#") && scale[i-1] !== "C")){
            oct++;
        }
        synth.push(scale[i] + oct.toString());
    }
    return synth;
  }

  // Mute button for synthesizer
  const [lightColor, setLightColor] = useState("green");
  function playMute(){
    // Set status light color based on Transport.state
    const status = Tone.Transport.state;
    if(status==="started") {
      Tone.Transport.stop()
      setLightColor("red");
      
    }
    else{
      Tone.Transport.start();
      setLightColor("green");
    }
  }

  // Execute on every new scale selection (either new root or new mode), or every change of octave
  useEffect(() => {
    // Set new array of notes for synthesizer
    let synthScale;
    synthScale = ScaleForSynth(keyScale, octave);
    handleSynthScale(synthScale);

    Tone.Transport.cancel();
    const synth = new Tone.PolySynth().toDestination();
    const seq = new Tone.Sequence((time, note) => {
      synth.triggerAttackRelease(note, 0.1, time);
    }, synthScale).start(0);

    // Set status light color based on Transport.state
    const status = Tone.Transport.state;
    if(status==="started") {
      setLightColor("green");
    }
    else{
      setLightColor("red");
    }

  },[keyScale, octave, bpm]);

  return (
    <div className="App" style={{backgroundImage: `url(${carpetBg})`, backgroundSize: "cover"}}>
      <div className="content-wrapper" style={{backgroundImage: `url(${metalBg})`, backgroundSize: "cover"}}>
        <h1 className="indicator-wrapper">{keyRoot} {keyMode}</h1>
        <RootSelector root = {keyRoot} changeRoot = {handleRoot}/>
        
        <div className='scale-mode-wrapper'>
          <ScaleSelector root = {keyRoot} mode = {keyMode} changeScale={handleScale}/>
          <SettingsSelector lightColor = {lightColor} muteLoop = {playMute} octave={octave} bpm={bpm} changeOctave={handleOctave} changeBpm={handleBpm}/>
            {/* <div className="pattern-title-wrapper">
                <h3>PATTERN</h3>
            </div>

            <div className="pattern-settings-panel">
                <BsArrowUpRight className='pattern-button' style={{backgroundColor: this.state.pattern==='up' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "up")}/>
                <BsArrowDownRight className='pattern-button' style={{backgroundColor: this.state.pattern==='down' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "down")}/>
            </div> */}

          <ModeSelector mode = {keyMode} changeMode = {handleMode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
