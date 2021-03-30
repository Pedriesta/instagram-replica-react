import React from 'react';
import {classes, ids} from 'Registry';
import gridOn from 'Assets/icons/grid_on-24px.svg';
import gridOff from 'Assets/icons/grid_off-24px.svg';

const ImageTab = (props) => {
    const src = props.imageGrid ? gridOn : gridOff;

    const classNames = [];
    if(props.imageGridActive)
    classNames.push(classes.CONTENT_TAB_CLICKED);

    classNames.push(classes.CONTENT_TAB);

    return (
        <button className={classNames.join(' ')} id={ids.IMAGE_TAB} onClick={props.toggleImageGrid}>
            <img src={src} alt="ImageTab" id={ids.IMAGE_GRID_ICON}></img>
            Images
        </button>
    );
};

export default ImageTab;