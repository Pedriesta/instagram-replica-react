import LikeCommentIconWrapper from 'Components/Wrappers/LikeCommentIconWrapper';
import React, { Component } from 'react';
import { classes } from 'Registry';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleLike} from 'Redux/actions';
import { getPostById } from 'Redux/selectors';

class VideoPost extends Component {

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

const mapStateToProps = (state, ownProps) => {
    const video = getPostById(state, ownProps.id);
    return {...video};
}

export default connect(mapStateToProps, {toggleLike})(VideoPost);
