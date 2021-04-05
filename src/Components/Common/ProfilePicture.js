import React, { useState, useEffect } from 'react';
import {ids, otherConstants} from 'Registry';

import { useDispatch } from 'react-redux'
import {addProfilePicture} from 'Redux/reducers/profilePicture';
import { useSelector } from 'react-redux'
const ProfilePicture = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const profilePicture = useSelector(state => state.profilePicture);

    useEffect(() => {
        async function fetchData(){
            try{
                let data = await fetch(otherConstants.DATA_FILE);
                data = await data.json();
                dispatch(addProfilePicture({
                    imageUrl : data.profilePicture,
                    altUserName : data.name
                }));
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if(loading)
    return(<h1>Loading Data ...</h1>);

    return (
        <div id = {ids.PROFILE_PICTURE_WRAPPER}>
            <img id={ids.PROFILE_PICTURE} src={profilePicture.profilePictureUrl} alt={profilePicture.altUserName}></img>
        </div>
    );
}


export default (ProfilePicture);

