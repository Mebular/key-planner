import React from 'react';
import './Key.css'
import { Scale } from 'tone';

class Key extends React.Component {

    IsNoteFlat = (note) => {
        if(note.includes('#')) {
            return true;
        }
    }

    IsNoteInScale = (note, scale) => {
        if(scale.includes(note)){
            return true;
        }
        else{
            return false;
        }
    }

    render() {
        let keyClassName = 'key';
        const noteIsFlat = this.IsNoteFlat(this.props.note);

        if(noteIsFlat){
            keyClassName += "-flat";
        }

        let noteIsInScale = this.IsNoteInScale(this.props.note, this.props.keyScale)

        let key;
        if (noteIsFlat) {
            key = <div className={keyClassName} style={{backgroundColor: noteIsInScale ? "#a6ff0080" : "black"}}></div>;
        }
        else {
            key = (
                <div className={keyClassName} style={{backgroundColor: noteIsInScale ? "#a6ff0080" : "white"}}>
                    {/* <div className='key-text'>
                        {this.props.note[0].toUpperCase()}
                    </div> */}
                </div>
                );
        }
        
        return key;
    }

}

export { Key };