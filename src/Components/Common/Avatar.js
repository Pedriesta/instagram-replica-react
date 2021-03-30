// import {classes, size} from 'Registry';
import React from 'react';
import {ids, size} from 'Registry';
class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        if(this.props.size==="large"){
            return(
                <img id={ids.AVATAR_LARGE} src={this.props.avatarUrl} alt={this.props.alt} ></img>
            );
        }
        return(
            <img id={ids.AVATAR} src={this.props.avatarUrl} alt={this.props.alt}></img>
        );
        

        // else logic for small and large size if needed in future
    }
}

export{Avatar};