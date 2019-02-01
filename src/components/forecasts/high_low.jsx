import React from 'react';
import { weaterIcons } from '../../assets/styles/index';

const HighLow = (props) => {
    return (
        <ul className="highlow">
            <li className='high'>{ props.high }</li>
            <li>|</li>
            <li className='low'>{ props.low }</li>
        </ul>
    )
}

export default HighLow;