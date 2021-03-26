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

    toggleGrid = () =>{
        this.setState((prevState) =>({
            activeGrid : prevState.activeGrid===state.IMAGE_GRID ? state.VIDEO_GRID : state.IMAGE_GRID
        }));
    }
    render() {
        let gridToDisplay = {};
        if(this.state.activeGrid===state.IMAGE_GRID)
        gridToDisplay = <ImageGridWrapper></ImageGridWrapper>
        else
        gridToDisplay = <VideoGridWrapper></VideoGridWrapper>
        return (
            <div id={ids.CONTENT}>
                <div id={ids.CONTENT_TABS}>
                <ImageTab imageGrid={this.state.activeGrid===state.IMAGE_GRID} toggleImageGrid={this.toggleGrid}></ImageTab>
                <VideoTab videoGrid={this.state.activeGrid===state.VIDEO_GRID} toggleVideoGrid={this.toggleGrid}></VideoTab>
                </div>
                {gridToDisplay}
            </div>
        );
    }
}

export default ImageAndVideosContent;