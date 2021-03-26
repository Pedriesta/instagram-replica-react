import React from 'react';
import { classes } from 'Registry';
import messageIcon from 'Assets/icons/chat_bubble-24px.svg'
const MessagesIcon = () => {
    return (
        <div className={classes.ICON}>
            <img className={classes.NAVIGATION_ICON} src={messageIcon} alt="Messages"></img>
        </div>
    );
};

export default MessagesIcon;