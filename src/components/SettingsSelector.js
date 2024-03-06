import React from 'react';
import { useState } from 'react';
import './SettingsSelector.css'
import rubberBg from '../images/rubber-bg.jpg';
import { RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx'
import { BsArrowUpRight } from 'react-icons/bs';
import { BsArrowDownRight } from 'react-icons/bs';
import { PiArrowElbowLeft } from 'react-icons/pi';
import { PiArrowElbowRight } from 'react-icons/pi';

function SettingsSelector(props) {

    function handleBPMClick(type){
       if(type==="up"){
        if(props.bpm < 240){
            props.changeBpm(props.bpm + 5);
        }
       }
       else{
        if(props.bpm > 5) {
            props.changeBpm(props.bpm - 5);
        }
       }
    }

    function handleClick(type){
        if(type==="up"){
            if(props.octave < 6){
                props.changeOctave(props.octave + 1);
            }
           }
           else{
            if(props.octave > 1) {
                props.changeOctave(props.octave - 1);
            }
           }    
    }

    function handlePatternClick(type) {
        if(type==="up"){
            props.changePattern("up");
        }
        else if(type==="down"){
            props.changePattern("down");
        }
        else if(type==="downUp"){
            props.changePattern("downUp");
        }
        else{
            props.changePattern("upDown")
        }
    }

    // Set of buttons to select between 7 modes
    return(
    <div className="settings-selector">
        <div className="settings-title-wrapper">
            <h3>SYNTH</h3>
        </div>
        <div className="settings-wrapper" style={{backgroundImage: `url(${rubberBg})`, backgroundSize: "1000px 1000px"}}>

            { props.lightColor === "green" ? (
                <RxSpeakerOff className='mute-button' onClick={() => { props.muteLoop()}}/>
            ) : (
                <RxSpeakerLoud className='mute-button' onClick={() => { props.muteLoop()}}/>
            )}
            <div className='playing-light' style={{backgroundColor: props.lightColor, boxShadow: "0px 0px 25px " + props.lightColor}}/>

            <div className="bpm-settings-panel">
                <button className="bpm-arrow-button" onClick={() => handleBPMClick("down")}>{"<"}</button>
                <div className="bpm-wrapper">
                    <h2 style={{marginTop: "15px", marginLeft: "-3px"}}>{props.bpm}</h2>
                    <h6 style={{marginTop: "-10px"}}>BPM</h6>
                </div>
                <button className="bpm-arrow-button" onClick={() => handleBPMClick("up")}>{">"}</button>
            </div>
            <div className="octave-settings-panel">
                <button className="octave-arrow-button" onClick={() => handleClick("down")}>{"<"}</button>
                <div className="octave-wrapper">
                    <h1 style={{marginTop: "15px"}}>{props.octave}</h1>
                    <h6 style={{marginTop: "-20px"}}>OCT</h6>
                </div>
                <button className="octave-arrow-button" onClick={() => handleClick("up")}>{">"}</button>
            </div>
            <div className="pattern-settings-panel" style={{marginTop: "20px"}}>
                <BsArrowUpRight className='pattern-button' style={{backgroundColor: props.pattern==='up' ? "#a6ff00" : ""}} onClick={() => handlePatternClick("up")}/>
                <BsArrowDownRight className='pattern-button' style={{backgroundColor: props.pattern==='down' ? "#a6ff00" : ""}} onClick={() => handlePatternClick("down")}/>
            </div>
            <div className="pattern-settings-panel">
                <PiArrowElbowRight className='pattern-button' style={{backgroundColor: props.pattern==='downUp' ? "#a6ff00" : ""}} onClick={() => handlePatternClick("downUp")}/>
                <PiArrowElbowLeft className='pattern-button' style={{transform: 'rotate(180deg)', backgroundColor: props.pattern==='upDown' ? "#a6ff00" : ""}} onClick={() => handlePatternClick("upDown")}/>
            </div>
        </div>
            
{/* 
            <div className="pattern-settings-panel">
                <BsArrowUpRight className='pattern-button' style={{backgroundColor: this.state.pattern==='up' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "up")}/>
                <BsArrowDownRight className='pattern-button' style={{backgroundColor: this.state.pattern==='down' ? "#a6ff0080" : ""}} onClick={this.handlePatternClick.bind(this, "down")}/>
            </div> */}
    </div>
    )
}

export default SettingsSelector;