/* eslint-disable import/no-anonymous-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {otherConstants} from 'Registry';

const initialState = {
    profilePictureUrl : "",
    altUserName : "",
    loadingStatus : "idle",
    error : ""
};

export const fetchProfilePicture = createAsyncThunk('profilePicture/fetchProfilePicture', async () => {
    let imageUrl = '';
    let name = '';
    let data = await fetch(otherConstants.DATA_FILE);
    data = await data.json();
    imageUrl = data.profilePicture;
    name = data.name;
    return {imageUrl, name};
});


const profilePictureSlice = createSlice({
  name: 'profilePicture',
  initialState,
  reducers: {
    addProfilePicture(state, action){
        state.profilePictureUrl = action.payload.imageUrl;
        state.altUserName = action.payload.altUserName;
    }
  },
  extraReducers : {
      [fetchProfilePicture.pending] : (state, action) => {
        state.loadingStatus = 'loading'
      },
      [fetchProfilePicture.fulfilled] : (state, action) => {
          state.loadingStatus = 'fulfilled';
          state.profilePictureUrl = action.payload.imageUrl;
          state.altUserName = action.payload.name;
      },
      [fetchProfilePicture.rejected] : (state, action) => {
        state.loadingStatus = 'failed'
        state.error = action.error.message
      }
  }
})

export const { addProfilePicture } = profilePictureSlice.actions

export default profilePictureSlice.reducer
