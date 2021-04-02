/* eslint-disable import/no-anonymous-default-export */
import {ADD_IMAGES, ADD_VIDEOS, TOGGLE_LIKE} from 'Redux/actionTypes';
import { getPostById } from 'Redux/selectors';

const initialState = {
        images : [],
        videos : []
};

export default function(state = initialState, action){
    switch(action.type){

        case ADD_IMAGES : {
            const images = action.payload;
            return{
                ...state,
                images : images
            };
        }

        case ADD_VIDEOS : {
            const videos = action.payload;
            return{
                ...state,
                videos : videos
            };
        }

        case TOGGLE_LIKE : {
            const postId = action.payload;
            const image = state.images.find((image) => {
                return image.id===postId;
            });

            if(image){
                image.liked = !image.liked;
                image.likes = image.liked ? image.likes+1 : image.likes - 1
                return{
                    ...state,
                    images : state.images
                };
            }
            else{
                const video = state.videos.find((video)=>{
                    return video.id===postId;
                });
                video.liked = !video.liked;
                video.likes = video.liked ? video.likes+1 : video.likes - 1;
                return{
                    ...state,
                    videos : state.videos
                };
            }
        }

        default : {
            return state;
        }
    }
}