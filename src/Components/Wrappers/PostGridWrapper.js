import ImagePost from 'Components/Common/ImagePost';
import VideoPost from 'Components/Common/VideoPost';
import React, { useEffect, useState } from 'react';
import { ids, otherConstants} from 'Registry';

import { useDispatch } from 'react-redux'
import {addImages, addVideos} from 'Redux/reducers/posts';
import { useSelector } from 'react-redux'

const ImageGridWrapper = () => {
    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const images = useSelector(state => state.posts.images);

    // componentDidMount Fetch Videos
    useEffect(()=>{
       async function fetchData(){
            try{
                let data = await fetch(otherConstants.DATA_FILE);
                data = await data.json();
                dispatch(addImages(data.posts.images));
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        
        fetchData();
    }, []);

    if(loading)
    return(<h1>Loading Data ...</h1>);

    const imageGrid = images.map(image => {
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


const VideoGridWrapper = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const videos = useSelector(state => state.posts.videos);
    
    // componentDidMount Fetch Data
    useEffect(()=>{
       async function fetchData(){
            try{
                let data = await fetch(otherConstants.DATA_FILE);
                data = await data.json();
                dispatch(addVideos(data.posts.videos));
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        
        fetchData();
    }, []);

    if(loading)
    return(<h1>Loading Data ...</h1>);

    const videoGrid = videos.map(video =>{
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

export {ImageGridWrapper, VideoGridWrapper};