import React from 'react';
import { Text, View } from 'react-native';
import './RootSelector.css'

class RootSelector extends React.Component {
    render() {
        return(
        <div className="wrapper">
            <div>
                <h3 className='root-selector-title'>ROOT</h3>
            </div>
            <div className="root-button-container">
                <button className="root-button">C</button>
                <button className="root-button-sharp">C#</button>
                <button className="root-button">D</button>
                <button className="root-button-sharp">D#</button>
                <button className="root-button">E</button>
                <button className="root-button">F</button>
                <button className="root-button-sharp">F#</button>
                <button className="root-button">G</button>
                <button className="root-button-sharp">G#</button>
                <button className="root-button">A</button>
                <button className="root-button-sharp">A#</button>
                <button className="root-button">B</button>
            </div>
        </div>
        )
    }
}

export { RootSelector }