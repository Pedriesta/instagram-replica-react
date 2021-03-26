import CommentIcon from 'Components/Common/CommentIcon';
import LikeIcon from 'Components/Common/LikeIcon';
import NumberOfComments from 'Components/Common/NumberOfComments';
import NumberOfLikes from 'Components/Common/NumberOfLikes';
import React, { Component } from 'react';
import { classes } from 'Registry';

class LikeCommentIconWrapper extends Component {
    render() {
        return (
            <div className={classes.LIKES_AND_COMMENTS}>
                <LikeIcon liked={this.props.isLiked} ></LikeIcon>
                <NumberOfLikes numberOfLikes={this.props.numberOfLikes}></NumberOfLikes>
                <CommentIcon></CommentIcon>
                <NumberOfComments NumberOfComments={this.props.numberOfComments}></NumberOfComments>
            </div>
        );
    }
}

export default LikeCommentIconWrapper;