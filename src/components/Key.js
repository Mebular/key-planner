import React from 'react';
import './Key.css'

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

    IsNoteRoot = (note, scale) => {
        if(scale[0] === note){
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
        let noteIsRoot = this.IsNoteRoot(this.props.note, this.props.keyScale)

        let key;
        if (noteIsFlat) {
            if(noteIsInScale){
                key = <div className={keyClassName} style={{background: noteIsRoot ? "linear-gradient(to top, #a6ff08, #292929)" : "linear-gradient(to top, #84cc06, #292929 40%)"}}></div>;
            }
            else {
                key = <div className={keyClassName} style={{backgroundColor: "#292929"}}></div>;
            }
        }
        else {
            if(noteIsInScale)
            {
                key = (
                    <div className={keyClassName} style={{background: noteIsRoot ? "linear-gradient(to top, #a6ff08, white)" : "linear-gradient(to top, #84cc06, white 40%)"}}>
                        {/* <div className='key-text'>
                            {this.props.note[0].toUpperCase()}
                        </div> */}
                    </div>
                    );
            }
            else {
                key = (
                    <div className={keyClassName} style={{backgroundColor: "white"}}>
                        {/* <div className='key-text'>
                            {this.props.note[0].toUpperCase()}
                        </div> */}
                    </div>
                    );
            }
        }
        
        return key;
    }

}

export { Key };