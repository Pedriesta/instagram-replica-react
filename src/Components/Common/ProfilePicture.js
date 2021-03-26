import React from 'react';
import { ids } from 'Registry';

const ProfilePicture = props => {
    return (
        <div id = {ids.PROFILE_PICTURE_WRAPPER}>
            <img id={ids.PROFILE_PICTURE} src={props.profilePicture} alt={props.userName}></img>
        </div>
    );
};


export default ProfilePicture;