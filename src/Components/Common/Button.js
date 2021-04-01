import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <div id={props.id} className={props.className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

Button.propTypes = {
    id : PropTypes.number,
    classNames : PropTypes.arrayOf(PropTypes.string),
    onClick : PropTypes.func,
    children : PropTypes.node
}

export default Button;