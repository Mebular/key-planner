import React from 'react';
import { useState } from 'react';
import './ScaleSelector.css'
import { Piano } from '../components/Piano.js';

class ScaleSelector extends React.Component {

constructor(props){
    super(props);
    this.state = {
        keyScale: ["C", "D", "E", "F", "G", "A", "B"]
    }
}

    FindSteps = (mode) => {
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

    FindScale = (root, steps, notes) => {
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
        
        return finalScale;
    }

    render() {

        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

        let keySteps;
        keySteps = this.FindSteps(this.props.mode);
        let keyScale;
        keyScale = this.FindScale(this.props.root, keySteps, notes);

        return(
        <div className="indicator-panel">
            <div className="piano-wrapper">
                <Piano pianoScale = {keyScale}/>
            </div>
            <div className="scale-wrapper">
                <h1>{keyScale[0]}</h1>
                <h1>{keyScale[1]}</h1>
                <h1>{keyScale[2]}</h1>
                <h1>{keyScale[3]}</h1>
                <h1>{keyScale[4]}</h1>
                <h1>{keyScale[5]}</h1>
                <h1>{keyScale[6]}</h1>
            </div>
        </div>
        );
    }
}

export { ScaleSelector }