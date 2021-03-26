import React from 'react';
import { classes, ids } from 'Registry';
import tvOff from 'Assets/icons/tv_off-24px.svg';
import tvOn from 'Assets/icons/tv-24px.svg';

const VideoTab = (props) => {
    let src = "";
    props.videoGrid? src = tvOn : src = tvOff;

    return (
        <button className={classes.CONTENT_TAB} id={ids.VIDEO_TAB} onClick={props.toggleVideoGrid}>
            <img src={src} alt="Video Tab" id={ids.VIDEO_GRID_ICON}></img>
            Videos
        </button>
    );
};

export default VideoTab;