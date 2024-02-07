import React from 'react';
import { useState } from 'react';
import './RootSelector.css'

class RootSelector extends React.Component {

    render() {
        return(
        <div className="root-wrapper">
            <div>
                <h3 className='root-selector-title'>TONIC</h3>
            </div>
            <div className="root-button-container">
                <button value='C' style={{backgroundColor: this.props.root==='C' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("C")}>C</button>
                <button value='C#' style={{backgroundColor: this.props.root==='C#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={() => this.props.changeRoot("C#")}>C#</button>
                <button value='D' style={{backgroundColor: this.props.root==='D' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("D")}>D</button>
                <button value='D#' style={{backgroundColor: this.props.root==='D#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={() => this.props.changeRoot("D#")}>D#</button>
                <button value='E' style={{backgroundColor: this.props.root==='E' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("E")}>E</button>
                <button value='F' style={{backgroundColor: this.props.root==='F' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("F")}>F</button>
                <button value='F#' style={{backgroundColor: this.props.root==='F#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={() => this.props.changeRoot("F#")}>F#</button>
                <button value='G' style={{backgroundColor: this.props.root==='G' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("G")}>G</button>
                <button value='G#' style={{backgroundColor: this.props.root==='G#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={() => this.props.changeRoot("G#")}>G#</button>
                <button value='A' style={{backgroundColor: this.props.root==='A' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("A")}>A</button>
                <button value='A#' style={{backgroundColor: this.props.root==='A#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={() => this.props.changeRoot("A#")}>A#</button>
                <button value='B' style={{backgroundColor: this.props.root==='B' ? "#a6ff0080" : ""}} className="root-button" onClick={() => this.props.changeRoot("B")}>B</button>
            </div>
        </div>
        )
    }
}

export { RootSelector }