// import {classes, size} from 'Registry';
import React from 'react';
import {ids, size} from 'Registry';
class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){

        // if(this.props.size===size.MEDIUM)
        return(
            <img id={ids.AVATAR} src={this.props.avatarUrl} alt={this.props.alt}></img>
        );

        // else logic for small and large size if needed in future
    }
}

export{Avatar};