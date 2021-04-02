import UserBio from 'Components/Common/UserBio';
import React, { Component } from 'react';
import { ids, otherConstants } from 'Registry';
import Button from 'Components/Common/Button';
import caretIcon from 'Assets/icons/keyboard_arrow_down-white-18dp.svg'
import spreadIcon from 'Assets/icons/more_horiz-24px.svg';
import Icon from 'Components/Common/Icon';
import { connect } from "react-redux";
import {addUserInfo} from 'Redux/actions';
import {toggleFollow} from 'Redux/actions';
class ProfileContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();

            // Dispatch Action to Redux Store
            this.props.addUserInfo({
                userName : data.name,
                numberOfPosts : data.numberOfPosts,
                followers : data.followers,
                following : data.following,
                bio : otherConstants.BIO,
                isFollowed : data.isFollowed
            });
            this.setState({
                loading : false               
            });
        }catch(err){
            console.log(err);
        }
    }

    // Dispatch Action to Redux Store
    updateFollowStatus = () => {
        this.props.toggleFollow();
    }

    render() {
        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);

        const {userInfo, isFollowed} = this.props;
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

const mapStateToProps = (state) => {
    const userInfo  = state.userInfo;
    return {userInfo};
}

// Connect to Redux Store
export default connect(mapStateToProps, {addUserInfo, toggleFollow} )(ProfileContent);