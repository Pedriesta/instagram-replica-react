import UserBio from 'Components/Common/UserBio';
import React, { useEffect} from 'react';
import { ids} from 'Registry';
import Button from 'Components/Common/Button';

import caretIcon from 'Assets/icons/keyboard_arrow_down-white-18dp.svg'
import spreadIcon from 'Assets/icons/more_horiz-24px.svg';
import Icon from 'Components/Common/Icon';

import { useDispatch } from 'react-redux'
import {fetchUserInfo, toggleFollow as toggleFollowAction} from 'Redux/reducers/userInfo';
import { useSelector } from 'react-redux'

const ProfileContent = () => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(state => state.userInfo.loadingStatus);

    function toggleFollow(){
        dispatch(toggleFollowAction());
    }

    const userInfo = useSelector(state => state.userInfo);

    useEffect(()=>{
        dispatch(fetchUserInfo());
    }, []);

    // Render if data has not been fetched else display loader
    if(loadingStatus==='loading')
    return(<h1>Loading Data ...</h1>);

    if(loadingStatus==='failed')
    return(<h1>Error Loading Data ...</h1>);

    const followBtnText = userInfo.isFollowed ? "unfollow" : "follow";
    return (
        <div id = {ids.PROFILE_CONTENT}>
                <div id={ids.TITLE_BUTTONS}>
                    {/* User Name */}
                <span ids={ids.USER_NAME}>{userInfo.userName}</span>

                {/* Follow Button */}
                <Button id={ids.FOLLOW_BUTTON} onClick={toggleFollow} children={followBtnText}></Button>
                
                {/* Caret Button */}
                <Button id={ids.CARET_WITH_BACKGROUND} children={
                    <img id={ids.CARET} src={caretIcon} alt="Caret"></img>    
                }></Button>

                {/* Spread Button */}
                <Icon id={ids.SPREAD} src={spreadIcon} alt="Spread Button"></Icon>
            </div>

            <div id={ids.POSTS_FOLLOWER_INFO}>
                <b id={ids.NUMBER_OF_POSTS}>{userInfo.numberOfPosts} </b> posts<span className="space"></span>
                <b id={ids.FOLLOWERS_COUNT}>{userInfo.followers} </b> followers<span className="space"></span><b id={ids.FOLLOWING_COUNT}>{userInfo.following}</b> following
            </div>

            <UserBio bio={userInfo.bio}></UserBio>
        </div>
    );
}

// Connect to Redux Store
export default ProfileContent;