import React from 'react';
import {classes, ids} from 'Registry';
import gridOn from 'Assets/icons/grid_on-24px.svg';
import gridOff from 'Assets/icons/grid_off-24px.svg';

const ImageTab = (props) => {
    console.log(props);
    let src = "";
    props.imageGrid ? src=gridOn : src=gridOff
    return (
        <button className={classes.CONTENT_TAB} id={ids.IMAGE_TAB} onClick={props.toggleImageGrid}>
            <img src={src} alt="ImageTab" id={ids.IMAGE_GRID_ICON}></img>
            Images
        </button>
    );
};

export default ImageTab;