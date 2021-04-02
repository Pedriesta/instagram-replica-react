import React, { Component } from 'react';
import {ids, otherConstants} from 'Registry';
import {connect} from 'react-redux';
import {addProfilePicture} from 'Redux/actions';

class ProfilePicture extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true
        }
    }
    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.props.addProfilePicture(data.profilePicture, data.name);
            this.setState({
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
                <img id={ids.PROFILE_PICTURE} src={this.props.profilePictureUrl} alt={this.props.altUserName}></img>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const profilePicture = state.profilePicture;
    return {...profilePicture};
}

export default connect(mapStateToProps, {addProfilePicture})(ProfilePicture);

