import React from 'react';
import { useState } from 'react';
import './ModeSelector.css'

class ModeSelector extends React.Component {

    render() {
        return(
        <div className="wrapper">
            <div>
                <h3 className="major-title">Major</h3>
                <div className="major-panel">
                    <button value="ionian" style={{backgroundColor: this.props.mode==='ionian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("ionian")}>Ionian</button>
                    <button value="lydian" style={{backgroundColor: this.props.mode==='lydian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("lydian")}>Lydian</button>
                    <button value="mixolydian" style={{backgroundColor: this.props.mode==='mixolydian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("mixolydian")}>Mixolydian</button>
                </div>
            </div>
            <div>
                <h3 className="minor-title">Minor</h3>
                <div className="minor-panel">
                    <button value="dorian" style={{backgroundColor: this.props.mode==='dorian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("dorian")}>Dorian</button>
                    <button value="phrygian" style={{backgroundColor: this.props.mode==='phrygian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("phrygian")}>Phrygian</button>
                    <button value="aeolian" style={{backgroundColor: this.props.mode==='aeolian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("aeolian")}>Aeolian</button>
                    <button value="locrian" style={{backgroundColor: this.props.mode==='locrian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("locrian")}>Locrian</button>
                </div>
            </div>
        </div>
        )
    }
}

export { ModeSelector }