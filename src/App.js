import React from "react";
import ProfilePicture from 'Components/Common/ProfilePicture';
import Navbar from 'Components/Wrappers/Navbar';
import image from 'Assets/images/download.png'; 
import { ids } from "Registry";
import ProfileContent from "Components/Wrappers/ProfileContent";
import ImageAndVideosContent from "Components/Wrappers/ImageAndVideosContent";

function App() {
  return (
    <React.Fragment>
      <Navbar ></Navbar>
      <div id="mainBody">
        <div className="container" id={ids.PROFILE}>
          <ProfilePicture ></ProfilePicture>
          <ProfileContent></ProfileContent>
        </div>
        <div className="profileBorder"></div>
        <ImageAndVideosContent></ImageAndVideosContent>
      </div>
    </React.Fragment>

  );
}

export default App;
