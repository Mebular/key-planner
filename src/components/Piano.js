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

                <Key note="c2"/>
                <Key note="c#2"/>
                <Key note="d2"/>
                <Key note="d#2"/>
                <Key note="e2"/>
                <Key note="f2"/>
                <Key note="f#2"/>
                <Key note="g2"/>
                <Key note="g#2"/>
                <Key note="a2"/>
                <Key note="a#2"/>
                <Key note="b2"/>
            </div>
        )
    }
}

export { Piano }