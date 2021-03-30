import CommentIcon from 'Components/Common/CommentIcon';
import LikeIcon from 'Components/Common/LikeIcon';
import NumberOfComments from 'Components/Common/NumberOfComments';
import NumberOfLikes from 'Components/Common/NumberOfLikes';
import React from 'react';
import { classes } from 'Registry';

function LikeCommentIconWrapper(props){
    return (
        <div className={classes.LIKES_AND_COMMENTS}>
            <LikeIcon liked={props.isLiked} toggleLike={props.toggleLike}></LikeIcon>
            <NumberOfLikes numberOfLikes={props.numberOfLikes}></NumberOfLikes>
            <CommentIcon></CommentIcon>
            <NumberOfComments numberOfComments={props.numberOfComments}></NumberOfComments>
        </div>
    );
}

export default LikeCommentIconWrapper;