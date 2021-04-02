/* eslint-disable import/no-anonymous-default-export */
import {ADD_USER_INFO, TOGGLE_FOLLOW} from 'Redux/actionTypes';

const initialState = {
    userName : "",
    numberOfPosts : "",
    followers : "",
    following : "",
    isFollowed : false,
    bio : ""
};

export default function(state = initialState, action){
    switch(action.type){
        case ADD_USER_INFO : {
            const {userName, numberOfPosts, followers, following, isFollowed, bio} = action.payload;
            return{
                userName : userName,
                numberOfPosts : numberOfPosts,
                followers : followers,
                following : following,
                isFollowed : isFollowed,
                bio : bio
            };
        }

        case TOGGLE_FOLLOW : {
            return{
                ...state,
                isFollowed : !state.isFollowed,
                followers : state.isFollowed ? state.followers - 1 : state.followers + 1
            };
        }

        default : {
            return state;
        }
    }
}