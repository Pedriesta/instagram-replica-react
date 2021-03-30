import React from 'react';
import { classes } from 'Registry';
import likeIconUnfilled from 'Assets/icons/favorite_border-24px.svg';
import likeIconFilled from 'Assets/icons/favorite-24px.svg';

function LikeIcon(props){
    if(props.liked)
        return (
            <img className={[classes.ICON, classes.LIKE_ICON].join(' ')} 
            src={likeIconFilled} alt="Liked" 
            onClick={props.toggleLike}></img>
        );
    else
        return(
            <img className={[classes.ICON, classes.LIKE_ICON].join(' ')} 
            src={likeIconUnfilled} alt="Liked" 
            onClick={props.toggleLike}></img>

        );
}

export default LikeIcon;