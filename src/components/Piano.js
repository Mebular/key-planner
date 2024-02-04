import React from 'react';
import { Key } from './Key.js'
import './Piano.css'

class Piano extends React.Component {
    render() {
        return(
            <div className='piano'>
                <Key note="c1"/>
                <Key note="c#1"/>
                <Key note="d1"/>
                <Key note="d#1"/>
                <Key note="e1"/>
                <Key note="f1"/>
                <Key note="f#1"/>
                <Key note="g1"/>
                <Key note="g#1"/>
                <Key note="a1"/>
                <Key note="a#1"/>
                <Key note="b1"/>
            </div>
        )
    }
}

export { Piano }