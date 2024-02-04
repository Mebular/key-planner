import React from 'react';
import { useState } from 'react';
import './RootSelector.css'

class RootSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyRoot: 'D'
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (e) => {
        this.setState((state) => ({
            keyRoot: e.target.value
        }));
    }

    render() {
        return(
        <div className="wrapper">
            <h1>{this.state.keyRoot}</h1>
            <div>
                <h3 className='root-selector-title'>ROOT</h3>
            </div>
            <div className="root-button-container">
                <button value='C' style={{backgroundColor: this.state.keyRoot==='C' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>C</button>
                <button value='C#' style={{backgroundColor: this.state.keyRoot==='C#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={this.handleClick}>C#</button>
                <button value='D' style={{backgroundColor: this.state.keyRoot==='D' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>D</button>
                <button value='D#' style={{backgroundColor: this.state.keyRoot==='D#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={this.handleClick}>D#</button>
                <button value='E' style={{backgroundColor: this.state.keyRoot==='E' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>E</button>
                <button value='F' style={{backgroundColor: this.state.keyRoot==='F' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>F</button>
                <button value='F#' style={{backgroundColor: this.state.keyRoot==='F#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={this.handleClick}>F#</button>
                <button value='G' style={{backgroundColor: this.state.keyRoot==='G' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>G</button>
                <button value='G#' style={{backgroundColor: this.state.keyRoot==='G#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={this.handleClick}>G#</button>
                <button value='A' style={{backgroundColor: this.state.keyRoot==='A' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>A</button>
                <button value='A#' style={{backgroundColor: this.state.keyRoot==='A#' ? "#a6ff0080" : ""}} className="root-button-sharp" onClick={this.handleClick}>A#</button>
                <button value='B' style={{backgroundColor: this.state.keyRoot==='B' ? "#a6ff0080" : ""}} className="root-button" onClick={this.handleClick}>B</button>
            </div>
        </div>
        )
    }
}

export { RootSelector }