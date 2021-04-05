import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React from 'react';
import { classes } from 'Registry';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux'
import {toggleLike as toggleLikeAction} from 'Redux/reducers/posts';
import { useSelector } from 'react-redux'

const ImagePost = (props) => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.posts.images.find((image)=>image.id===props.id));

    function toggleLike(){
        dispatch(toggleLikeAction(image.id));
    }

    const likeCommentProps = {
        isLiked : image.liked,
        numberOfLikes : image.likes,
        numberOfComments : image.comments,
        toggleLike : toggleLike
    }
    
    return (
        <div data-id={props.id} className={classes.POST_WRAPPER}>
            <LikeCommentIconWrapper {...likeCommentProps}></LikeCommentIconWrapper>
            <img src={image.imageUrl} alt={image.caption} className={classes.GALLERY_POST}></img>
        </div>
    );
}

ImagePost.propTypes = {
    id : PropTypes.number
}

ImagePost.defaultProps = {
    id : -1
}


export default ImagePost;