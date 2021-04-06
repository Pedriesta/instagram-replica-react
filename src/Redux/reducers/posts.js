/* eslint-disable import/no-anonymous-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {otherConstants} from 'Registry';

const initialState = {
    images : [],
    videos : [],
    loadingStatus: 'idle',
    error : ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    let images = {};
    let videos = {};
    let data = await fetch(otherConstants.DATA_FILE);
    data = await data.json();
    images = data.posts.images;
    videos = data.posts.videos;
    return {images, videos};
});


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

    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.loadingStatus = 'loading'
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loadingStatus = 'finished'
            // Add any fetched posts to the array
            state.images = state.images.concat(action.payload.images);
            state.videos = state.videos.concat(action.payload.videos);


        },
        [fetchPosts.rejected]: (state, action) => {
            state.loadingStatus = 'failed'
            state.error = action.error.message
        }
    }
});


export const { addImages, addVideos, toggleLike } = postsSlice.actions

export default postsSlice.reducer
