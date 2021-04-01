import UserBio from 'Components/Common/UserBio';
import React, { Component } from 'react';
import { ids, otherConstants } from 'Registry';
import Button from 'Components/Common/Button';
import caretIcon from 'Assets/icons/keyboard_arrow_down-white-18dp.svg'
import spreadIcon from 'Assets/icons/more_horiz-24px.svg';
import Icon from 'Components/Common/Icon';

class ProfileContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                userName : "",
                numberOfPosts : "",
                followers : "",
                following : "",
                loading : true
            },
            isFollowed : false
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
                    bio : otherConstants.BIO,
                    loading : false               
                },
                isFollowed : data.isFollowed,
            });
        }catch(err){
            console.log(err);
        }
    }

    updateFollowStatus = () => {
        this.setState((prevState) => ({
            isFollowed : !prevState.isFollowed,
            userInfo : {
                ...prevState.userInfo,
                followers : prevState.isFollowed ? prevState.userInfo.followers-1 : prevState.userInfo.followers+1
            }
        }));
    }
    render() {
        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);

        const {userInfo, isFollowed} = this.state;
        const followBtnText = isFollowed ? "unfollow" : "follow";
        return (
            <div id = {ids.PROFILE_CONTENT}>
                 <div id={ids.TITLE_BUTTONS}>
                     {/* User Name */}
                    <span ids={ids.USER_NAME}>{userInfo.userName}</span>

                    {/* Follow Button */}
                    <Button id={ids.FOLLOW_BUTTON} onClick={this.updateFollowStatus} children={followBtnText}></Button>
                    
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
}

export default ProfileContent;