import { Avatar } from 'Components/Common/Avatar';
import {SpreadButtonPost} from 'Components/Common/SpreadButton';
import React, { Component } from 'react';
import {ids, otherConstants} from 'Registry';
import Button from 'Components/Common/Button';


class VideoInfoWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            profilePicture : '',
            userName : '',
            loading : true
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.setState({
                profilePicture : data.profilePicture,
                userName : data.name,
                loading : false
            });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);

        // todo make it dynamic
        const followButtonText = "follow";
        return (
            <div id={ids.VIDEO_INFO_WRAPPER}>
                <div id={ids.USER_INFO_FOLLOW}>
                    <Avatar avatarUrl={this.state.profilePicture} alt={this.state.userName} size="large"></Avatar>
                    <div id={ids.USERNAME_POST_WRAPPER}>
                        <p id={ids.USERNAME_OF_POST}>{this.state.userName}</p>
                    </div>
                    <Button id="followButtonPost" children={followButtonText}></Button> 
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