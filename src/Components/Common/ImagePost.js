import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';
import PropTypes from 'prop-types';

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

ImagePost.propTypes = {
    isLiked : PropTypes.bool,
    numberOfLikes : PropTypes.number,
    numberOfComments : PropTypes.number,
    caption : PropTypes.string,
    imageUrl : PropTypes.string,
    id : PropTypes.number
}

ImagePost.defaultProps = {
    isLiked : false,
    numberOfLikes : 0,
    numberOfComments : 0,
    caption : "Image Post",
    imageUrl : "",
    id : -1
}

export default ImagePost;