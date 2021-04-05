/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName : "",
    numberOfPosts : "",
    followers : "",
    following : "",
    isFollowed : false,
    bio : ""
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUserInfo(state, action){
        const {userName, numberOfPosts, followers, following, isFollowed, bio} = action.payload;

        state.userName = userName;
        state.numberOfPosts = numberOfPosts;
        state.followers = followers;
        state.following = following;
        state.isFollowed = isFollowed;
        state.bio = bio;
      },
      
    toggleFollow(state, action){
        state.followers = state.isFollowed ? state.followers - 1 : state.followers + 1;
        state.isFollowed = !state.isFollowed;
    }
  },
})

export const { addUserInfo, toggleFollow } = userInfoSlice.actions

export default userInfoSlice.reducer
