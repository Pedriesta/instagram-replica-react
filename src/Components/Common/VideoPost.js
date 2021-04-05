import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React from 'react';
import { classes } from 'Registry';
import {Link} from 'react-router-dom';

import { useDispatch } from 'react-redux'
import {toggleLike as toggleLikeAction} from 'Redux/reducers/posts';
import { useSelector } from 'react-redux'

const VideoPost = (props) => {

    const dispatch = useDispatch();
    const video = useSelector(state => state.posts.videos.find((image)=>image.id===props.id));

    function toggleLike(){
        dispatch(toggleLikeAction(video.id));
    }

    const likeCommentProps = {
        isLiked : video.liked,
        numberOfLikes : video.likes,
        numberOfComments : video.comments,
        toggleLike : toggleLike
    }

    return (
        <div className={classes.POST_WRAPPER} data-id={props.id}>
            <LikeCommentIconWrapper {...likeCommentProps}></LikeCommentIconWrapper>
            <Link to="/video" onClick={()=>{
                localStorage.setItem("link", video.videoUrl);
            }}>
                <video className={classes.GALLERY_POST} controls="controls" autoPlay>
                        <source src={video.videoUrl} type="video/mp4"></source>
                </video>
            </Link>     
        </div>
    );
}


export default (VideoPost);
