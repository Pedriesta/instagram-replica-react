/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profilePictureUrl : "",
    altUserName : ""
};

const profilePictureSlice = createSlice({
  name: 'profilePicture',
  initialState,
  reducers: {
    addProfilePicture(state, action){
        state.profilePictureUrl = action.payload.imageUrl;
        state.altUserName = action.payload.altUserName;
    }
  },
})

export const { addProfilePicture } = profilePictureSlice.actions

export default profilePictureSlice.reducer
