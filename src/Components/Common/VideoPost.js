import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';

class VideoPost extends Component {
    render() {
        return (
            <div className={classes.POST_WRAPPER} data-id={this.props.id}>
                <LikeCommentIconWrapper></LikeCommentIconWrapper>
                    <video className={classes.GALLERY_POST} controls="controls" autoPlay>
                        <source src={this.props.videoUrl} type="video/mp4"></source>
                    </video>
            </div>
        );
    }
}

export default VideoPost;