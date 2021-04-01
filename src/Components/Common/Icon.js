import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
    return(
        <img id = {props.id} className={props.classNames.join(' ')} 
        src={props.src} alt={props.alt} 
        onClick={props.onClick}></img>
    );
}

Icon.propTypes = {
    classNames : PropTypes.arrayOf(PropTypes.string),
    src : PropTypes.string.isRequired,
    alt : PropTypes.string,
    onClick : PropTypes.func
}

Icon.defaultProps = {
    alt : "Icon",
    classNames : []
}

export default Icon;