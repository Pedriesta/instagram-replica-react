import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from 'Redux/reducers/userInfo';
import postsReducer from 'Redux/reducers/posts';
import profilePictureReducer from 'Redux/reducers/profilePicture';


export default configureStore({
  reducer: {
    userInfo : userInfoReducer,
    posts : postsReducer,
    profilePicture :profilePictureReducer
  }
})