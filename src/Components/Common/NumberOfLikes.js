import React from 'react';
import { classes } from 'Registry';

const NumberOfLikes = (props) => {
    return (
        <p className={classes.NUMBER_OF_LIKES}>{props.numberOfLikes}</p>
    );
}

export default NumberOfLikes;