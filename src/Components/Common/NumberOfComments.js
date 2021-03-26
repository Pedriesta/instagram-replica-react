import React, { Component } from 'react';
import { classes } from 'Registry';

class NumberOfComments extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <p className={classes.NUMBER_OF_COMMENTS}>{this.props.numberOfComments}</p>
        );
    }
}

export default NumberOfComments;