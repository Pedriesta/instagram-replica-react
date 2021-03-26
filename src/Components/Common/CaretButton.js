import React from 'react';
import { ids } from 'Registry';
import caretIcon from 'Assets/icons/keyboard_arrow_down-white-18dp.svg'
const CaretButton = () => {
    return (
        <div id={ids.CARET_WITH_BACKGROUND}>
            <img id={ids.CARET} src={caretIcon} alt="Caret"></img>
        </div>
        
    );
};

export default CaretButton;