import React from 'react';
import { useState } from 'react';
import './RootSelector.css'
import rubberBg from '../images/rubber-bg.jpg';

function RootSelector(props) {

    // Set of buttons to select root tonic
    return(
    <div>
        <div>
            <h3 className='root-selector-title'>TONIC</h3>
        </div>
        <div className="root-wrapper" style={{backgroundImage: `url(${rubberBg})`, backgroundSize: "1000px 1000px"}}>
            <div className="root-button-container">
                <button value='C' style={{backgroundColor: props.root==='C' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("C")}>C</button>
                <button value='C#' style={{backgroundColor: props.root==='C#' ? "#a6ff00" : ""}} className="root-button-sharp" onClick={() => props.changeRoot("C#")}>C#</button>
                <button value='D' style={{backgroundColor: props.root==='D' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("D")}>D</button>
                <button value='D#' style={{backgroundColor: props.root==='D#' ? "#a6ff00" : ""}} className="root-button-sharp" onClick={() => props.changeRoot("D#")}>D#</button>
                <button value='E' style={{backgroundColor: props.root==='E' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("E")}>E</button>
                <button value='F' style={{backgroundColor: props.root==='F' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("F")}>F</button>
                <button value='F#' style={{backgroundColor: props.root==='F#' ? "#a6ff00" : ""}} className="root-button-sharp" onClick={() => props.changeRoot("F#")}>F#</button>
                <button value='G' style={{backgroundColor: props.root==='G' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("G")}>G</button>
                <button value='G#' style={{backgroundColor: props.root==='G#' ? "#a6ff00" : ""}} className="root-button-sharp" onClick={() => props.changeRoot("G#")}>G#</button>
                <button value='A' style={{backgroundColor: props.root==='A' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("A")}>A</button>
                <button value='A#' style={{backgroundColor: props.root==='A#' ? "#a6ff00" : ""}} className="root-button-sharp" onClick={() => props.changeRoot("A#")}>A#</button>
                <button value='B' style={{backgroundColor: props.root==='B' ? "#a6ff00" : ""}} className="root-button" onClick={() => props.changeRoot("B")}>B</button>
            </div>
        </div>
    </div>
    )
}

export default RootSelector;