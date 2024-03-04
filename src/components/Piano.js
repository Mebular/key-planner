import React from 'react';
import Key from './Key.js'
import './Piano.css'

function Piano(props) {
    // Passed a key as prop, draw the notes and color them in if they are valid in scale
        return(
            <div className='piano'>
                <Key note="C" keyScale = {props.pianoScale}/>
                <Key note="C#" keyScale = {props.pianoScale}/>
                <Key note="D" keyScale = {props.pianoScale}/>
                <Key note="D#" keyScale = {props.pianoScale}/>
                <Key note="E" keyScale = {props.pianoScale}/>
                <Key note="F" keyScale = {props.pianoScale}/>
                <Key note="F#" keyScale = {props.pianoScale}/>
                <Key note="G" keyScale = {props.pianoScale}/>
                <Key note="G#" keyScale = {props.pianoScale}/>
                <Key note="A" keyScale = {props.pianoScale}/>
                <Key note="A#" keyScale = {props.pianoScale}/>
                <Key note="B" keyScale = {props.pianoScale}/>
                <Key note="C" keyScale = {props.pianoScale}/>
                <Key note="C#" keyScale = {props.pianoScale}/>
                <Key note="D" keyScale = {props.pianoScale}/>
                <Key note="D#" keyScale = {props.pianoScale}/>
                <Key note="E" keyScale = {props.pianoScale}/>
                <Key note="F" keyScale = {props.pianoScale}/>
                <Key note="F#" keyScale = {props.pianoScale}/>
                <Key note="G" keyScale = {props.pianoScale}/>
                <Key note="G#" keyScale = {props.pianoScale}/>
                <Key note="A" keyScale = {props.pianoScale}/>
                <Key note="A#" keyScale = {props.pianoScale}/>
                <Key note="B" keyScale = {props.pianoScale}/>
            </div>
        )
}

export default Piano;