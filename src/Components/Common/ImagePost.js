import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';

class ImagePost extends Component {
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
            numberOfLikes : !prevState.isLiked ? prevState.numberOfLikes+1 : prevState.numberOfLikes-1
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
            <div data-id={this.props.id} className={classes.POST_WRAPPER}>
                <LikeCommentIconWrapper {...likeCommentProps}></LikeCommentIconWrapper>
                <img src={this.props.imageUrl} alt={this.props.caption} className={classes.GALLERY_POST}></img>
            </div>
        );
    }
}

export default ImagePost;