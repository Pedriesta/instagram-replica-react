/* eslint-disable import/no-anonymous-default-export */
import { ADD_PROFILE_PICTURE } from 'Redux/actionTypes';

const initialState = {
    profilePictureUrl : "",
    altUserName : ""
};

export default function(state = initialState, action){
    switch(action.type){

        case ADD_PROFILE_PICTURE : {
            return{
                ...state,
                profilePictureUrl : action.payload.imageUrl,
                altUserName : action.payload.altUserName
            }
        }
        default : {
            return state;
        }
    }
}