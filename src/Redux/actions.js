import {ADD_IMAGES, ADD_PROFILE_PICTURE, ADD_USER_INFO, ADD_VIDEOS, TOGGLE_FOLLOW, TOGGLE_LIKE} from 'Redux/actionTypes';

export const toggleFollow = () => {
    return{
        type : TOGGLE_FOLLOW
    };
}

export const addUserInfo = (userInfo) => {
    return {
        type : ADD_USER_INFO,
        payload : {
            userName : userInfo.userName,
            numberOfPosts : userInfo.numberOfPosts,
            followers : userInfo.followers,
            following : userInfo.following,
            isFollowed : userInfo.isFollowed,
            bio : userInfo.bio
        }
    };
}

export const addImages = (images) => {
    return{
        type : ADD_IMAGES,
        payload : images
    };
}

export const addVideos = (videos) => {
    return{
        type : ADD_VIDEOS,
        payload : videos
    };
}

export const toggleLike = (postId) => {
    return{
        type : TOGGLE_LIKE,
        payload : postId
    };
}

export const addProfilePicture = (imageUrl, altUserName) => {
    return{
        type : ADD_PROFILE_PICTURE,
        payload : {imageUrl, altUserName}
    };
}