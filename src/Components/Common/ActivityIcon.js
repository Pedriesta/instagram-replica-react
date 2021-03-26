import React from 'react';
import { classes } from 'Registry';
import activityIcon from 'Assets/icons/favorite_border-24px.svg'
const ActivityIcon = () => {
    return (
        <div className={classes.ICON}>
            <img className={classes.NAVIGATION_ICON} src={activityIcon} alt="Activity"></img>
        </div>
    );
};

export default ActivityIcon;