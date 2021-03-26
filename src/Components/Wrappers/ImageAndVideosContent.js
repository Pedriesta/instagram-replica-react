import ImageTab from 'Components/Common/ImageTab';
import VideoTab from 'Components/Common/VideoTab';
import React, { Component } from 'react';
import { ids, state } from 'Registry';
import { ImageGridWrapper, VideoGridWrapper } from './PostGridWrapper';

class ImageAndVideosContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeGrid : state.IMAGE_GRID
        }
    }
    render() {
        return (
            <div id={ids.CONTENT}>
                <div id={ids.CONTENT_TABS}>
                <ImageTab imageGrid={true}></ImageTab>
                <VideoTab videoGrid={false}></VideoTab>
                </div>
                <ImageGridWrapper ></ImageGridWrapper>
                <VideoGridWrapper ></VideoGridWrapper>
            </div>
        );
    }
}

export default ImageAndVideosContent;