import React, { Component } from 'react';
import { classes} from 'Registry';
import commentIcon from 'Assets/icons/chat_bubble-24px.svg';

class CommentIcon extends Component {
    render() {
        return (
            <img className={[classes.COMMENT_ICON, classes.ICON].join(' ')} src={commentIcon} alt="Comment Icon"></img>
        );
    }
}

export default CommentIcon;