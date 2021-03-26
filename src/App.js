import React from "react";
import ProfilePicture from 'Components/Common/ProfilePicture';
import Navbar from 'Components/Wrappers/Navbar';
import image from 'Assets/images/download.png'; 
import { ids } from "Registry";
import ProfileContent from "Components/Wrappers/ProfileContent";
import ImagePost from "Components/Common/ImagePost";
import CommentIcon from "Components/Common/CommentIcon";
import LikeCommentIconWrapper from "Components/Wrappers/LikeCommentIconWrapper";
import { ImageGridWrapper, VideoGridWrapper } from "Components/Wrappers/PostGridWrapper";
import ImageAndVideosContent from "Components/Wrappers/ImageAndVideosContent";
function App() {
  return (

    <React.Fragment>
      <Navbar avatarUrl={image} userName="Anubhav" size="medium"></Navbar>
    <div id="mainBody">
      <div className="container" id={ids.PROFILE}>
        <ProfilePicture profilePicture={image} alt={"Anubhav"}></ProfilePicture>
        <ProfileContent></ProfileContent>
      </div>
      <div class="profileBorder"></div>
      <ImageAndVideosContent></ImageAndVideosContent>
    </div>
    </React.Fragment>

    // <div id="content">    <VideoGridWrapper></VideoGridWrapper></div>

    // <LikeCommentIconWrapper isLiked={true} numberOfLikes={45} numberOfComments={50} toggleLike={()=>{console.log("Done")}}></LikeCommentIconWrapper>
    // <ImagePost id={1} imageUrl={image} caption={"Image"} isLiked={true} numberOfLikes={45} numberOfComments={50}></ImagePost>
  );
}

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default App;

export default App;
