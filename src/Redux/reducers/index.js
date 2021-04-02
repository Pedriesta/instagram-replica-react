import userInfo from './userInfo';
import posts from './posts';
import profilePicture from './profilePicture';
import { combineReducers } from "redux";

export default combineReducers({userInfo, posts, profilePicture});