import React, { Component } from 'react';
import { ids } from 'Registry';

class FollowButtonProfile extends Component {
    handleClick=()=>{
        this.props.updateFollowStatus();
    }
    render() {
        let buttonText = "";
        this.props.isFollowed ? buttonText="unfollow" : buttonText = "follow";
        return (
            <div id={ids.FOLLOW_BUTTON} onClick={this.handleClick}>
                {buttonText}
            </div>
        );
    }
}

class FollowButtonPost extends Component {
    render() {
        let buttonText = "";
        this.props.isFollowed ? buttonText="unfollow" : buttonText = "follow";
        return (
            
            <div id="followButtonPost">
                <div id="followButtonPostText">
                    {buttonText}
                </div>
            </div>
        );
    }
}

export {FollowButtonPost, FollowButtonProfile};
