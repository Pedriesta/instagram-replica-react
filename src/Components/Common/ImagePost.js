import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleLike} from 'Redux/actions';
import { getPostById } from 'Redux/selectors';

class ImagePost extends Component {
    toggleLike=()=>{
        this.props.toggleLike(this.props.id);
    }

    render() {
        const likeCommentProps = {
            isLiked : this.props.liked,
            numberOfLikes : this.props.likes,
            numberOfComments : this.props.comments,
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

const mapStateToProps = (state, ownProps) => {
    const image = getPostById(state, ownProps.id);
    return {...image};
}

export default connect(mapStateToProps, {toggleLike})(ImagePost);