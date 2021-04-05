/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    images : [],
    videos : []
};


const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addImages(state, action){
        state.images = action.payload;
    },

    addVideos(state, action){
        state.videos = action.payload;
    },

    toggleLike(state, action){
        const id = action.payload;
        const image = state.images.find((image)=>{
            return image.id===id;
        });
        const video = state.videos.find((video)=>{
            return video.id===id;
        });
        if(image){
            image.liked = !image.liked;
            image.likes = image.liked ? image.likes+1 : image.likes - 1;
        }
        if(video){
            video.liked = !video.liked;
            video.likes = video.liked ? video.likes+1 : video.likes - 1;
        }
        
    }
  },
})

export const { addImages, addVideos, toggleLike } = postsSlice.actions

export default postsSlice.reducer
