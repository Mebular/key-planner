import React from 'react';
import './Key.css'

class Key extends React.Component {

    IsNoteFlat = (note) => {
        if(note.includes('#')) {
            return true;
        }
    }

    render() {

        let keyClassName = 'key';
        const noteIsFlat = this.IsNoteFlat(this.props.note);

        if(noteIsFlat){
            keyClassName += "-flat";
        }

        let key;
        if (noteIsFlat) {
            key = <div className={keyClassName}></div>;
        }
        else {
            key = (
                <div className={keyClassName}>
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