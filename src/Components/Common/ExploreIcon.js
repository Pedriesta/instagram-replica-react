import React from 'react';
import { classes } from 'Registry';
import exploreIcon from 'Assets/icons/explore-24px.svg'
const ExploreIcon = () => {
    return (
        <div className={classes.ICON}>
            <img className={classes.NAVIGATION_ICON} src={exploreIcon} alt="Explore"></img>
        </div>
    );
};

export default ExploreIcon;