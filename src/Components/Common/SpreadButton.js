import React from 'react';
import spread from 'Assets/icons/more_horiz-24px.svg';
import { ids } from 'Registry';


const SpreadButtonPost = () => {
    return(
        <span><img src={spread} alt="Spread" id={ids.SPREAD_OF_POST}></img></span>
    );
}

export {SpreadButtonPost};