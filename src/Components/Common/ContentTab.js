import React from 'react';
import PropTypes from 'prop-types';

const ContentTab = (props) => {
    return(
        <button className={props.classNames.join(' ')} id={props.id} onClick={props.onClick}>
            <img src={props.iconSrc} alt={props.iconAlt} id={props.iconId}></img>
            {props.label}
        </button>
    )
}

ContentTab.propTypes = {
    classNames : PropTypes.arrayOf(PropTypes.string),
    id : PropTypes.string,
    onClick : PropTypes.func.isRequired,
    iconSrc : PropTypes.string.isRequired,
    iconAlt : PropTypes.string,
    iconId  : PropTypes.string
}

ContentTab.defaultProps = {

}

export default ContentTab;