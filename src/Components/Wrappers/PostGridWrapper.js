import ImagePost from 'Components/Common/ImagePost';
import VideoPost from 'Components/Common/VideoPost';
import React, { Component } from 'react';
import { ids, otherConstants} from 'Registry';
class ImageGridWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : []
        }
    }
    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE, {headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }});
            data = await data.json();
            this.setState({
                images : data.posts.images
            })
        }catch(err){
            console.log(err);
        }
    }
    render() {
        const imageGrid = this.state.images.map(image => {
            return <ImagePost 
            id={image.id} 
            imageUrl={image.imageUrl} 
            caption={image.caption} 
            numberOfLikes={image.numberOfLikes}
            numberOfComments={image.numberOfComments}
            isLiked={image.liked}>
            </ImagePost>
        });

        return (
            <div id={ids.IMAGE_GRID}>
                {imageGrid}
            </div>
        );
    }
}

class VideoGridWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos : []
        }
    }
    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE, {headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }});
            data = await data.json();
            this.setState({
                videos : data.posts.videos
            })
        }catch(err){
            console.log(err);
        }
    }
    render(){
        const videoGrid = this.state.videos.map(video =>{
            const post = <VideoPost
            id = {video.id}
            videoUrl = {video.videoUrl}
            caption = {video.caption}
            numberOfLikes={video.numberOfLikes}
            numberOfComments={video.numberOfComments}
            isLiked = {video.liked}></VideoPost>
            console.log(post);
            return post;
        });
        console.log(videoGrid);
        return(
            <div id={ids.VIDEO_GRID}>
                {videoGrid}
            </div>
        )
    }
}

export {ImageGridWrapper, VideoGridWrapper};