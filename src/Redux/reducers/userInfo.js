/* eslint-disable import/no-anonymous-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {otherConstants} from 'Registry';

const initialState = {
    userName : "",
    numberOfPosts : "",
    followers : "",
    following : "",
    isFollowed : false,
    bio : ""
};

export const fetchUserInfo = createAsyncThunk('userInfo/fetchUserInfo', async () => {
  let data = await fetch(otherConstants.DATA_FILE);
  data = await data.json();
  return {
    userName : data.name,
    numberOfPosts : data.numberOfPosts,
    followers : data.followers,
    following : data.following,
    bio : otherConstants.BIO,
    isFollowed : data.isFollowed
  }
                    
});

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
  extraReducers : {
    [fetchUserInfo.pending] : (state, action) => {
      state.loadingStatus = 'loading'

    },
    [fetchUserInfo.fulfilled] : (state, action) => {
      state.loadingStatus = 'finished';
      const {userName, numberOfPosts, followers, following, isFollowed, bio} = action.payload;

      state.userName = userName;
      state.numberOfPosts = numberOfPosts;
      state.followers = followers;
      state.following = following;
      state.isFollowed = isFollowed;
      state.bio = bio;
    },
    [fetchUserInfo.rejected] : (state, action) => {
      state.loadingStatus = 'failed'
      state.error = action.error.message
    }
  }
})

export const { addUserInfo, toggleFollow } = userInfoSlice.actions

export default userInfoSlice.reducer
