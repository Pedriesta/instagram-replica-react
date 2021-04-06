import ImagePost from 'Components/Common/ImagePost';
import VideoPost from 'Components/Common/VideoPost';
import React, { useEffect} from 'react';
import { ids} from 'Registry';

import { useDispatch } from 'react-redux'
import {fetchPosts} from 'Redux/reducers/posts';
import { useSelector } from 'react-redux'

const ImageGridWrapper = () => {
    
    const dispatch = useDispatch();
    const images = useSelector(state => state.posts.images);
    const loadingStatus = useSelector(state => state.posts.loadingStatus);
    // componentDidMount Fetch Videos

    useEffect(()=>{
        dispatch(fetchPosts());
    }, []);

    if(loadingStatus==='loading')
    return(<h1>Loading Data ...</h1>);

    if(loadingStatus==='failed')
    return(<h1>Error Loading Data ...</h1>);

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
    const videos = useSelector(state => state.posts.videos);
    const loadingStatus = useSelector(state => state.posts.loadingStatus)
    // componentDidMount Fetch Data
    useEffect(()=>{
        dispatch(fetchPosts);
    }, []);

    if(loadingStatus==='loading')
    return(<h1>Loading Data ...</h1>);

    if(loadingStatus==='failed')
    return(<h1>Error Loading Data ...</h1>);

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