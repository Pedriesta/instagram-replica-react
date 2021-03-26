import React, { Component } from 'react';
import { classes } from 'Registry';

class NumberOfLikes extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <p className={classes.NUMBER_OF_LIKES}>{this.props.numberOfLikes}</p>
        );
    }
}

export default NumberOfLikes;