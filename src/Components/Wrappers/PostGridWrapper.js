import ImagePost from 'Components/Common/ImagePost';
import VideoPost from 'Components/Common/VideoPost';
import React, { Component } from 'react';
import { ids, otherConstants} from 'Registry';
import { connect } from "react-redux";
import {addImages, addVideos} from 'Redux/actions';

class ImageGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.props.addImages(data.posts.images);
            this.setState({
               loading : false
            });
        }catch(err){
            console.log(err);
        }
    }

    render() {

        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);

        const imageGrid = this.props.images.map(image => {
            return <ImagePost key={image.id}
            id={image.id}>
            </ImagePost>
        });

        return (
            <div id={ids.IMAGE_GRID}>
                {imageGrid}
            </div>
        );
    }
}

const ImageGridMapStateToProps = (state) => {
    const images = state.posts.images;
    return {images};
}

class VideoGrid extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }

    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.props.addVideos(data.posts.videos);
            this.setState({
                loading : false
            })
        }catch(err){
            console.log(err);
        }
    }

    render(){
        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);

        const videoGrid = this.props.videos.map(video =>{
            const post = <VideoPost key={video.id}
            id = {video.id}>
            </VideoPost>
            return post;
        });
        return(
            <div id={ids.VIDEO_GRID}>
                {videoGrid}
            </div>
        )
    }
}

const VideoGridMapStateToProps = (state) => {
    const videos = state.posts.videos;
    return {videos};
}


const ImageGridWrapper = connect(ImageGridMapStateToProps, {addImages})(ImageGrid);
const VideoGridWrapper = connect(VideoGridMapStateToProps, {addVideos})(VideoGrid);

export {ImageGridWrapper, VideoGridWrapper};