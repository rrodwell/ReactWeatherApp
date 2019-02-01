import React from 'react';
import { weaterIcons } from '../../assets/styles/index';

const Storm = () => {
    return (
        <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
        </div>
    );
}
export default Storm;