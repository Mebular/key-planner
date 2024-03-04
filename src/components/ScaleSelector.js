import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import './ScaleSelector.css'
import Piano from '../components/Piano.js';

function ScaleSelector(props) {

    // Array of intervals between notes for a given mode (2 is a whole step, 1 is a half step)
    const FindSteps = (mode) => {
        let keySteps = [2,2,1,2,2,2,1];
        if(mode==="Ionian"){
            keySteps = [2,2,1,2,2,2,1];
        }
        else if(mode==="Dorian"){
            keySteps = [2,1,2,2,2,1,2];
        }
        else if(mode==="Phrygian"){
            keySteps = [1,2,2,2,1,2,2];
        }
        else if(mode==="Lydian"){
            keySteps = [2,2,2,1,2,2,1];
        }
        else if(mode==="Mixolydian"){
            keySteps = [2,2,1,2,2,1,2];
        }
        else if(mode==="Aeolian"){
            keySteps = [2,1,2,2,1,2,2];
        }
        else if(mode==="Locrian"){
            keySteps = [1,2,2,1,2,2,2];
        }
        return keySteps;
    }

    // Given an array of all possible notes, the chosen root and mode, build the scale
    const FindScale = (root, steps, notes) => {
        let finalScale = [];

        finalScale.push(root)   // First note

        const rootIndex = notes.indexOf(root);
        finalScale.push(notes[(rootIndex + steps[0]) % 12]);   // Second note

        const secondIndex = notes.indexOf(finalScale[1]);
        finalScale.push(notes[(secondIndex + steps[1]) % 12]); // Third note

        const thirdIndex = notes.indexOf(finalScale[2]);
        finalScale.push(notes[(thirdIndex + steps[2]) % 12]);  // 4th note

        const fourthIndex = notes.indexOf(finalScale[3]);
        finalScale.push(notes[(fourthIndex + steps[3]) % 12]); // 5th note

        const fifthIndex = notes.indexOf(finalScale[4]);
        finalScale.push(notes[(fifthIndex + steps[4]) % 12]);  // 6th note

        const sixthIndex = notes.indexOf(finalScale[5]);
        finalScale.push(notes[(sixthIndex + steps[5]) % 12]);  // 7th note
        
        // Add root note again to the end of scale
        finalScale.push(root);

        return finalScale;
    }

    // All music notes in conventional western music
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    // Use props passed from app to build scale
    let keySteps;
    keySteps = FindSteps(props.mode);
    let keyScale;
    keyScale = FindScale(props.root, keySteps, notes);
    
    // When either props change, change key scale at the App level
    useEffect(() => {
        props.changeScale(keyScale);
    },[props.root, props.mode]);

    return(
    <div className="indicator-panel">

        {/* Piano indicator, all green notes are valid in the chosen scale. Bright green notes are root*/}
        <div className="piano-wrapper">
            <Piano pianoScale = {keyScale}/>
        </div>

        {/* Indicator screen for notes in chosen scale */}
        <div className="scale-wrapper">
            <h1 style={{textShadow: "0px 0px 25px rgba(164,255,0,1)"}}>{keyScale[0]}</h1>
            <h1>{keyScale[1]}</h1>
            <h1>{keyScale[2]}</h1>
            <h1>{keyScale[3]}</h1>
            <h1>{keyScale[4]}</h1>
            <h1>{keyScale[5]}</h1>
            <h1>{keyScale[6]}</h1>
            <h1 style={{textShadow: "0px 0px 25px rgba(164,255,0,1)"}}>{keyScale[7]}</h1>
        </div>
    </div>
    );
    
}

export default ScaleSelector;