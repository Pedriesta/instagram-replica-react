import React, { useEffect } from 'react';
import {ids} from 'Registry';

import { useDispatch } from 'react-redux'
import {fetchProfilePicture} from 'Redux/reducers/profilePicture';
import { useSelector } from 'react-redux'
const ProfilePicture = () => {
    const dispatch = useDispatch();
    const profilePictureUrl = useSelector(state => state.profilePicture.profilePictureUrl);
    const altProfilePicture = useSelector(state => state.profilePicture.altUserName);

    const loadingStatus = useSelector(state => state.profilePicture.loadingStatus);


    useEffect(() => {
        dispatch(fetchProfilePicture());
    }, []);

    if(loadingStatus==='pending')
    return(<h1>Loading Data ...</h1>);

    if(loadingStatus==='rejected')
    return(<h1>Error Loading Data ...</h1>);

    return (
        <div id = {ids.PROFILE_PICTURE_WRAPPER}>
            <img id={ids.PROFILE_PICTURE} src={profilePictureUrl} alt={altProfilePicture}></img>
        </div>
    );
}


export default (ProfilePicture);

