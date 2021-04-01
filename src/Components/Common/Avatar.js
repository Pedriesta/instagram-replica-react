import React from 'react';
import {icons, ids} from 'Registry';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const id = props.size==="large" ? ids.AVATAR_LARGE : ids.AVATAR;
    return(
        <img id={id} src={props.avatarUrl} alt={props.alt}></img>
    );
}

Avatar.propTypes = {
    size : PropTypes.string,
    avatarUrl : PropTypes.string,
    alt : PropTypes.string
}

Avatar.defaultProps = {
    size : "medium",
    avatarUrl : icons.USER,
    alt : "Avatar"
}
export{Avatar};