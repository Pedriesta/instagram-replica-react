import React from 'react';
import { ids } from 'Registry';
import spread from 'Assets/icons/more_horiz-24px.svg';
const SpreadButton = () => {
    return (
        <img id={ids.SPREAD} src={spread} alt="Spread Button"></img>
    );
};

export default SpreadButton;