import React from 'react';
import { Key } from './Key.js'
import './Piano.css'

class Piano extends React.Component {
    render() {
        return(
            <div className='piano'>
                <Key note="C" keyScale = {this.props.pianoScale}/>
                <Key note="C#" keyScale = {this.props.pianoScale}/>
                <Key note="D" keyScale = {this.props.pianoScale}/>
                <Key note="D#" keyScale = {this.props.pianoScale}/>
                <Key note="E" keyScale = {this.props.pianoScale}/>
                <Key note="F" keyScale = {this.props.pianoScale}/>
                <Key note="F#" keyScale = {this.props.pianoScale}/>
                <Key note="G" keyScale = {this.props.pianoScale}/>
                <Key note="G#" keyScale = {this.props.pianoScale}/>
                <Key note="A" keyScale = {this.props.pianoScale}/>
                <Key note="A#" keyScale = {this.props.pianoScale}/>
                <Key note="B" keyScale = {this.props.pianoScale}/>
                <Key note="C" keyScale = {this.props.pianoScale}/>
                <Key note="C#" keyScale = {this.props.pianoScale}/>
                <Key note="D" keyScale = {this.props.pianoScale}/>
                <Key note="D#" keyScale = {this.props.pianoScale}/>
                <Key note="E" keyScale = {this.props.pianoScale}/>
                <Key note="F" keyScale = {this.props.pianoScale}/>
                <Key note="F#" keyScale = {this.props.pianoScale}/>
                <Key note="G" keyScale = {this.props.pianoScale}/>
                <Key note="G#" keyScale = {this.props.pianoScale}/>
                <Key note="A" keyScale = {this.props.pianoScale}/>
                <Key note="A#" keyScale = {this.props.pianoScale}/>
                <Key note="B" keyScale = {this.props.pianoScale}/>
            </div>
        )
    }
}

export { Piano }