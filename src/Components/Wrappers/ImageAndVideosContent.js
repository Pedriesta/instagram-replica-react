import ContentTab from 'Components/Common/ContentTab';
import React, { Component } from 'react';
import { classes, ids, state } from 'Registry';
import { ImageGridWrapper, VideoGridWrapper } from './PostGridWrapper';
import gridOn from 'Assets/icons/grid_on-24px.svg';
import gridOff from 'Assets/icons/grid_off-24px.svg';
import tvOff from 'Assets/icons/tv_off-24px.svg';
import tvOn from 'Assets/icons/tv-24px.svg';

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
        const gridToDisplay = this.state.activeGrid===state.IMAGE_GRID 
        ? <ImageGridWrapper></ImageGridWrapper>
        : <VideoGridWrapper></VideoGridWrapper>;

        const imageTabClasses = [classes.CONTENT_TAB];
        const videoTabClasses = [classes.CONTENT_TAB];

        this.state.activeGrid===state.IMAGE_GRID 
        ? imageTabClasses.push(classes.CONTENT_TAB_CLICKED) 
        : videoTabClasses.push(classes.CONTENT_TAB_CLICKED);


        const imageTabIcon = this.state.activeGrid===state.IMAGE_GRID ? gridOn : gridOff;
        const videoTabIcon = this.state.activeGrid===state.VIDEO_GRID ? tvOn : tvOff;

        return (
            <div id={ids.CONTENT}>
                <div id={ids.CONTENT_TABS}>
                    {/* Image Tab */}
                    <ContentTab
                    classNames={imageTabClasses}
                    id={ids.IMAGE_TAB}
                    iconSrc={imageTabIcon}
                    iconAlt = "Image Tab"
                    iconId = {ids.IMAGE_GRID_ICON}
                    onClick = {this.toggleGrid}
                    label="Images"></ContentTab>

                    {/* Video Tab */}
                    <ContentTab
                    classNames={videoTabClasses}
                    id={ids.VIDEO_TAB}
                    iconSrc={videoTabIcon}
                    iconAlt = "Image Tab"
                    iconId = {ids.VIDEO_GRID_ICON}
                    onClick = {this.toggleGrid}
                    label="Videos"></ContentTab>
                </div>
                {gridToDisplay}
            </div>
        );
    }
}

export default ImageAndVideosContent;