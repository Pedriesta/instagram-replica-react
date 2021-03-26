import React from 'react';
import { classes } from 'Registry';
import homeIcon from 'Assets/icons/home-24px.svg'
const HomeIcon = () => {
    return (
        <div className={classes.ICON}>
            <img className={classes.NAVIGATION_ICON} src={homeIcon} alt="Home"></img>
        </div>
    );
};

export default HomeIcon;