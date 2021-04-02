import React from 'react';
import { classes } from 'Registry';
import PropTypes from 'prop-types';
import likedFalseIcon from 'Assets/icons/favorite_border-24px.svg';
import likedTrueIcon from 'Assets/icons/favorite-24px.svg';
import commentIcon from 'Assets/icons/chat_bubble-24px.svg';
import Icon from 'Components/Common/Icon';

function LikeCommentIconWrapper(props){
    const likeIconClasses = [classes.ICON, classes.LIKE_ICON];
    const likeIcon = props.isLiked ? likedTrueIcon : likedFalseIcon;
    const commentIconClasses = [classes.ICON, classes.COMMENT_ICON];
    return (
        <div className={classes.LIKES_AND_COMMENTS}>
            <Icon classNames={likeIconClasses} src={likeIcon} alt="Like Icon" onClick={props.toggleLike}></Icon>
            <p className={classes.NUMBER_OF_LIKES}>{props.numberOfLikes}</p>
            <Icon classNames={commentIconClasses} src={commentIcon} alt="Comment Icon"></Icon>
            <p className={classes.NUMBER_OF_COMMENTS}>{props.numberOfComments}</p>
        </div>
    );
}

LikeCommentIconWrapper.propTypes = {
    isLiked : PropTypes.bool,
    toggleLike : PropTypes.func,
    numberOfLikes : PropTypes.number, 
    numberOfComments : PropTypes.number
}

LikeCommentIconWrapper.defaultProps = {
    isLiked : false,
    toggleLike : ()=>{
        console.log("toggle Like");
    },
    numberOfLikes : 0,
    numberOfComments : 0
}

export default LikeCommentIconWrapper;