import React from 'react';
import './PlayingLight.css'

class PlayingLight extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lightColor: this.props.color
        }
    }

    componentDidUpdate() {
        this.setState = {
            lightColor: this.props.color
        }
    }

    render() {
        let light;
        light = (
            <div className="playing-light" style={{backgroundColor: this.state.lightColor}}>
                <h1>{this.isPlaying}</h1>
            </div>
            );
            
        return light;
    }

}

export { PlayingLight };