import { Avatar } from 'Components/Common/Avatar';
import {FollowButtonPost} from 'Components/Common/FollowButton';
import {SpreadButtonPost} from 'Components/Common/SpreadButton';
import React, { Component } from 'react';
import {ids, otherConstants} from 'Registry';

class VideoInfoWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            profilePicture : '',
            userName : ''
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.setState({
                profilePicture : data.profilePicture,
                userName : data.name
            });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        return (
            <div id={ids.VIDEO_INFO_WRAPPER}>
                <div id={ids.USER_INFO_FOLLOW}>
                    <Avatar avatarUrl={this.state.profilePicture} alt={this.state.userName} size="large"></Avatar>
                    <div id={ids.USERNAME_POST_WRAPPER}>
                        <p id={ids.USERNAME_OF_POST}>{this.state.userName}</p>
                    </div>
                    <FollowButtonPost></FollowButtonPost>
                    <SpreadButtonPost></SpreadButtonPost>
                </div>
                <div id={ids.COMMENTS}></div>
                <div id={ids.LIKE_COMMENT_SHARE_INFO}></div>
                <div id={ids.ADD_COMMENT}></div>
            </div>

        );
    }
}

export default VideoInfoWrapper;