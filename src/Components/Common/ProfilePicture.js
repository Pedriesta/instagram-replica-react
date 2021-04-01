import React, { Component } from 'react';
import {ids, otherConstants} from 'Registry';

class ProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state = {
            image : '',
            name : '',
            loading : true
        }
    }
    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.setState({
                profilePicture : data.profilePicture,
                userName : data.name,
                loading : false
            });
        }catch(err){
            console.log(err);
        }
    }
    render() {
        if(this.state.loading)
        return(<h1>Loading Data ...</h1>);
        return (
            <div id = {ids.PROFILE_PICTURE_WRAPPER}>
                <img id={ids.PROFILE_PICTURE} src={this.state.profilePicture} alt={this.state.userName}></img>
            </div>
        );
    }
}

export default ProfilePicture;

