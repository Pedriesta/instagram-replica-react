import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';
import {Link} from 'react-router-dom';
class VideoPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked : this.props.isLiked,
            numberOfLikes : this.props.numberOfLikes
        }
    }
    toggleLike=()=>{
        this.setState((prevState) => ({
            isLiked : !prevState.isLiked,
            numberOfLikes : !prevState.isLiked ? prevState.numberOfLikes-1 : prevState.numberOfLikes+1
        }));
    }
    render() {
        const likeCommentProps = {
            isLiked : this.state.isLiked,
            numberOfLikes : this.state.numberOfLikes,
            numberOfComments : this.props.numberOfComments,
            toggleLike : this.toggleLike
        }
        return (
            <div className={classes.POST_WRAPPER} data-id={this.props.id}>
                <LikeCommentIconWrapper {...likeCommentProps}></LikeCommentIconWrapper>
                <Link to="/video" onClick={()=>{
                    localStorage.setItem("link", this.props.videoUrl);
                }}>
                    <video className={classes.GALLERY_POST} controls="controls" autoPlay>
                            <source src={this.props.videoUrl} type="video/mp4"></source>
                    </video>
                </Link>     
            </div>
        );
    }
}


export default VideoPost;