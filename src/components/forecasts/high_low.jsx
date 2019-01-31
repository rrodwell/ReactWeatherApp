import React from 'react';
import { weaterIcons } from '../../assets/styles/index';

const HighLow = (props) => {
    return (
        <ul class="highlow">
            <li class='high'>{ props.high }</li>
            <li>|</li>
            <li class='low'>{ props.low }</li>
        </ul>
    )
}

export default HighLow;