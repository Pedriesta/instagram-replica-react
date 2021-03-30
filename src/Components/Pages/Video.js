import React from 'react';
import Navbar from 'Components/Wrappers/Navbar';
import image from 'Assets/images/download.png'; 
import 'video.css';
import 'index.css';
import VideoInfoWrapper from 'Components/Wrappers/VideoInfoWrapper';
function Video(){
    return(
    <React.Fragment>
      <Navbar></Navbar>
        <div id="mainBody">
            <div className="container" id="contentWrapper">
                <div id="videoWrapper">
                    <video controls="controls" width="450px" height="850px">
                        <source id="videoSource" type="video/mp4" src={localStorage.getItem("link")}></source>
                    </video>
                </div>
            <VideoInfoWrapper></VideoInfoWrapper>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Video;