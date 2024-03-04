import React from 'react';
import './Key.css'
import { useState, useRef } from 'react'

function Key(props){

    // If piano note name includes #, it is a flat note
    const IsNoteFlat = (note) => {
        if(note.includes('#')) {
            return true;
        }
    }

    // If note is in the passed scale
    const IsNoteInScale = (note, scale) => {
        if(scale.includes(note)){
            return true;
        }
        else{
            return false;
        }
    }

    // If note is the root tonic of scale
    const IsNoteRoot = (note, scale) => {
        if(scale[0] === note){
            return true;
        }
        else{
            return false;
        }
    }

    // Start building className
    let keyClassName = 'key';
    let noteIsFlat = IsNoteFlat(props.note);

    // If note is flat (black), add -flat to className to style it differently than white keys.
    if(noteIsFlat){
        keyClassName += "-flat";
    }

    // Set checks to decide what color to style the keys (white, black, green, bright green)
    let noteIsInScale = IsNoteInScale(props.note, props.keyScale)
    let noteIsRoot = IsNoteRoot(props.note, props.keyScale)

    // Build key object using built className and style accordingly to checks.
    let key;
    if (noteIsFlat) {   // Black key
        if(noteIsInScale){  // In scale
            key = <div className={keyClassName} style={{background: noteIsRoot ? "linear-gradient(to top, #a6ff08, #292929)" : "linear-gradient(to top, #84cc06, #292929 40%)"}}></div>;
        }
        else {  // Not in scale
            key = <div className={keyClassName} style={{backgroundColor: "#292929"}}></div>;
        }
    }
    else {  // White key
        if(noteIsInScale)   // In scale
        {
            key = (
                <div className={keyClassName} style={{background: noteIsRoot ? "linear-gradient(to top, #a6ff08, white)" : "linear-gradient(to top, #84cc06, white 40%)"}}></div>
                );
        }
        else {  // Not in scale
            key = (
                <div className={keyClassName} style={{backgroundColor: "white"}}></div>
                );
        }
    }
    
    return key;
}

export default Key;