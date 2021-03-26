import CaretButton from 'Components/Common/CaretButton';
import FollowButtonProfile from 'Components/Common/FollowButton';
import SpreadButton from 'Components/Common/SpreadButton';
import UserBio from 'Components/Common/UserBio';
import React, { Component } from 'react';
import { ids, otherConstants } from 'Registry';

class ProfileContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                userName : "",
                numberOfPosts : "",
                followers : "",
                following : "",
            },
            isFollowed : ""
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.setState({
                userInfo : {
                    userName : data.name,
                    numberOfPosts : data.numberOfPosts,
                    followers : data.followers,
                    following : data.following,
                    bio : otherConstants.BIO               
                },
                isFollowed : data.isFollowed,
            });
        }catch(err){
            console.log(err);
        }
    }

    updateFollowStatus = ()=>{
        this.setState((prevState) => ({
            isFollowed : !prevState.isFollowed,
            userInfo : {
                ...prevState.userInfo,
                followers : prevState.isFollowed ? prevState.userInfo.followers-1 : prevState.userInfo.followers+1
            }
        }));
    }
    render() {
        const userInfo = this.state.userInfo;

        const titleButtons = 
        <div id={ids.TITLE_BUTTONS}>
            <span ids={ids.USER_NAME}>{userInfo.userName}</span>
            <FollowButtonProfile updateFollowStatus={this.updateFollowStatus} isFollowed={this.state.isFollowed}></FollowButtonProfile>
            <CaretButton></CaretButton>
            <SpreadButton></SpreadButton>
        </div>


        const postsFollowerInfo = 
        <div id={ids.POSTS_FOLLOWER_INFO}>
            <b id="numberOfPosts">{userInfo.numberOfPosts} </b> posts<span className="space"></span>
            <b id="followers">{userInfo.followers} </b> followers<span className="space"></span><b id="following">{userInfo.following}</b> following
        </div>
        return (
            <div id = {ids.PROFILE_CONTENT}>
                {titleButtons}
                {postsFollowerInfo}
                <UserBio bio={userInfo.bio}></UserBio>
            </div>
        );
    }
}

export default ProfileContent;