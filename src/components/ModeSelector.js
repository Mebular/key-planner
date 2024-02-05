import React from 'react';
import { useState } from 'react';
import './ModeSelector.css'

class ModeSelector extends React.Component {

    render() {
        return(
        <div className="mode-wrapper">
            <div>
                <h3 className="major-title">Major</h3>
                <div className="major-panel">
                    <button value="Ionian" style={{backgroundColor: this.props.mode==='Ionian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Ionian")}>Ionian</button>
                    <button value="Lydian" style={{backgroundColor: this.props.mode==='Lydian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Lydian")}>Lydian</button>
                    <button value="Mixolydian" style={{backgroundColor: this.props.mode==='Mixolydian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Mixolydian")}>Mixolydian</button>
                </div>
            </div>
            <div>
                <h3 className="minor-title">Minor</h3>
                <div className="minor-panel">
                    <button value="Dorian" style={{backgroundColor: this.props.mode==='Dorian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Dorian")}>Dorian</button>
                    <button value="Phrygian" style={{backgroundColor: this.props.mode==='Phrygian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Phrygian")}>Phrygian</button>
                    <button value="Aeolian" style={{backgroundColor: this.props.mode==='Aeolian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Aeolian")}>Aeolian</button>
                    <button value="Locrian" style={{backgroundColor: this.props.mode==='Locrian' ? "#a6ff0080" : ""}} className="mode-button" onClick={() => this.props.changeMode("Locrian")}>Locrian</button>
                </div>
            </div>
        </div>
        )
    }
}

export { ModeSelector }