import React, { Component } from 'react';
import { classes } from 'Registry';

const NumberOfComments = (props) => {
    return (
        <p className={classes.NUMBER_OF_COMMENTS}>{props.numberOfComments}</p>
    );
}

export default NumberOfComments;