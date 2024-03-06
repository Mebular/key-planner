import React from 'react';
import { useState } from 'react';
import './ModeSelector.css'
import rubberBg from '../images/rubber-bg.jpg';

function ModeSelector(props) {

    // Set of buttons to select between 7 modes
    return(
    <div>
        <div className="mode-title-wrapper">
            <h3>MODE</h3>
        </div>
        <div className="mode-wrapper" style={{backgroundImage: `url(${rubberBg})`, backgroundSize: "1000px 1000px"}}>
            <div>
                <h3 className="major-title">Major</h3>
                <div className="major-panel">
                    <button value="Ionian" style={{backgroundColor: props.mode==='Ionian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Ionian")}>Ionian</button>
                    <button value="Lydian" style={{backgroundColor: props.mode==='Lydian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Lydian")}>Lydian</button>
                    <button value="Mixolydian" style={{backgroundColor: props.mode==='Mixolydian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Mixolydian")}>Mixolydian</button>
                </div>
            </div>
            <div>
                <h3 className="minor-title">Minor</h3>
                <div className="minor-panel">
                    <button value="Dorian" style={{backgroundColor: props.mode==='Dorian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Dorian")}>Dorian</button>
                    <button value="Phrygian" style={{backgroundColor: props.mode==='Phrygian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Phrygian")}>Phrygian</button>
                    <button value="Aeolian" style={{backgroundColor: props.mode==='Aeolian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Aeolian")}>Aeolian</button>
                    <button value="Locrian" style={{backgroundColor: props.mode==='Locrian' ? "#a6ff00" : ""}} className="mode-button" onClick={() => props.changeMode("Locrian")}>Locrian</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModeSelector;