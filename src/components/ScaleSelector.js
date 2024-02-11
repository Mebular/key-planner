import React, { useEffect } from 'react';
import { useState } from 'react';
import './ScaleSelector.css'
import { Piano } from '../components/Piano.js';
import * as Tone from 'tone';
import { RxSpeakerLoud } from 'react-icons/rx'
import { BsArrowUpRight } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
import { PlayingLight } from './PlayingLight.js';

class ScaleSelector extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bpm: 120,
            octave: 3,
            lightColor: "red",
            pattern: "up"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleBPMClick = this.handleBPMClick.bind(this);
        this.handlePatternClick = this.handlePatternClick.bind(this);
    }

    handleClick(type) {
        if(type === "up"){
            this.setState(prevState => {
                return {octave: prevState.octave < 6 ? prevState.octave+1 : prevState.octave}
            });
        }
        else{
            this.setState(prevState => {
                return {octave: prevState.octave > 1 ? prevState.octave-1 : prevState.octave}
            });
        }
    }

    handleBPMClick(type) {
        if(type === "up"){
            this.setState(prevState => {
                return {bpm: prevState.bpm < 240 ? prevState.bpm+5 : prevState.bpm}
            });
        }
        else{
            this.setState(prevState => {
                return {bpm: prevState.bpm > 5 ? prevState.bpm-5 : prevState.bpm}
            });
        }
    }

    handlePatternClick(type) {
        if(type==="up"){
            this.setState(prevState => {
                return {pattern: "up"}
            });
        }
        else if(type==="down"){
            this.setState(prevState => {
                return {pattern: "down"}
            });
        }
    }

    componentWillUnmount = () => {
        Tone.Transport.cancel();
        Tone.Transport.dispose();
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
        
        finalScale.push(root);

        return finalScale;
    }

    ScaleForSynth = (keyScale, oct) => {
        let synthScale = [];
        var i;
        for(i = 0 ; i < 8 ; i++){
            if(i !== 0 && (keyScale[i] === "C" || (keyScale[i] === "C#") && keyScale[i-1] !== "C")){
                oct++;
            }
            synthScale.push(keyScale[i] + oct.toString());
        }

        return synthScale;
    }

    render() {

        Tone.Transport.cancel();

        Tone.Transport.bpm.value = this.state.bpm;

        const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

        let keySteps;
        keySteps = this.FindSteps(this.props.mode);
        let keyScale;
        keyScale = this.FindScale(this.props.root, keySteps, notes);
        let synthScale;
        synthScale = this.ScaleForSynth(keyScale, this.state.octave);

        let synth;
        let chordSynth;
        let toneLoop;

        let index = 0;

        synth = new Tone.PolySynth(Tone.Synth).toDestination();
        chordSynth = new Tone.PolySynth(Tone.Synth).toDestination();

        synth.volume.value = 0;
        chordSynth.volume.value = -10;

        let loopPattern = this.state.pattern;
        toneLoop = chooseLoop(loopPattern);

        toneLoop.start();
   
        function chooseLoop(loopPat) {
            if(loopPat==="up"){
                toneLoop = new Tone.Loop(playLoopUp, '8n');
            }
            else if(loopPat==="down"){
                toneLoop = new Tone.Loop(playLoopDown, '8n');
            }
            return toneLoop;
        }

        function playLoopUp () {
            const note = synthScale[index];
            const noteRoot = synthScale[0]
            const noteThird = synthScale[2];
            const noteFifth = synthScale[4];
            if (index === synthScale.length) {
                index = 0;
            }
            if(index===0){
                chordSynth.triggerAttackRelease([noteRoot, noteThird, noteFifth], '1n');
                synth.triggerAttackRelease(note, '16n');
            }
            else{
                synth.triggerAttackRelease(note, '16n');
            }
            index++;
        }

        function playLoopDown () {
            if (index === -1) {
                index = synthScale.length-1;
            }
            const note = synthScale[index];
            const noteRoot = synthScale[0]
            const noteThird = synthScale[2];
            const noteFifth = synthScale[4];
            if(index===synthScale.length-1){
                chordSynth.triggerAttackRelease([noteRoot, noteThird, noteFifth], '1n');
                synth.triggerAttackRelease(note, '16n');
            }
            else{
                synth.triggerAttackRelease(note, '16n');
            }
            index--;
        }

        function playMute () {
            if(Tone.Transport.state === "started") {
                Tone.Transport.stop();
                toneLoop.stop();
                Tone.Transport.cancel();
            }
            else {
                Tone.Transport.start()
                toneLoop.start();
            } 
        }

        return(
        <div className="indicator-panel">

            <div className="piano-wrapper">
                <Piano pianoScale = {keyScale}/>
            </div>

            <div className="settings-panel">
                <div className="pattern-title-wrapper">
                    <h3>PATTERN</h3>
                </div>
                <div className="bpm-settings-panel">
                    <button className="bpm-arrow-button" onClick={this.handleBPMClick.bind(this, "down")}>{"<"}</button>
                    <div className="bpm-wrapper">
                        <h2 style={{marginTop: "15px", marginLeft: "-3px"}}>{this.state.bpm}</h2>
                        <h6 style={{marginTop: "-10px"}}>BPM</h6>
                    </div>
                    <button className="bpm-arrow-button" onClick={this.handleBPMClick.bind(this, "up")}>{">"}</button>
                </div>

                <div className="octave-settings-panel">
                    <button className="octave-arrow-button" onClick={this.handleClick.bind(this, "down")}>{"<"}</button>
                    <div className="octave-wrapper">
                        <h1 style={{marginTop: "15px"}}>{this.state.octave}</h1>
                        <h6 style={{marginTop: "-20px"}}>OCT</h6>
                    </div>
                    <button className="octave-arrow-button" onClick={this.handleClick.bind(this, "up")}>{">"}</button>
                </div>

                <div className="pattern-settings-panel">
                    <BsArrowUpRight className='pattern-button' style={{backgroundColor: this.state.pattern==='up' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "up")}/>
                    <BsArrowDownRight className='pattern-button' style={{backgroundColor: this.state.pattern==='down' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "down")}/>
                </div>

                <RxSpeakerLoud className='mute-button' onClick={playMute}/>
            </div>

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
}

export { ScaleSelector }