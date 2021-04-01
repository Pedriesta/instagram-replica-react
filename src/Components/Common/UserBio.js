import React from 'react';
import { ids } from 'Registry';
import PropTypes from 'prop-types';

const UserBio = props => {
    return (
        <div id={ids.USER_BIO} dangerouslySetInnerHTML={{__html: props.bio}}>
        </div>
    );
};

UserBio.propTypes = {
    bio : PropTypes.string
}

UserBio.defaultProps = {
    bio : "This is my bio"
}

export default UserBio;