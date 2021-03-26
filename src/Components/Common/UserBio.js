import React from 'react';
import { ids } from 'Registry';

const UserBio = props => {
    return (
        <div id={ids.USER_BIO} dangerouslySetInnerHTML={{__html: props.bio}}>
        </div>
    );
};

export default UserBio;