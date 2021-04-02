import { Avatar } from 'Components/Common/Avatar';
import Brand from 'Components/Common/Brand';
import Icon from 'Components/Common/Icon';
import Searchbar from 'Components/Common/Searchbar';
import React, { Component } from 'react';
import { ids, classes, otherConstants, icons } from 'Registry';
import {connect} from 'react-redux';
import {addProfilePicture} from 'Redux/actions';

class Navbar extends Component {
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

        const navigationIconClassNames = [classes.NAVIGATION_ICON, classes.ICON];
        return (
            <header className="container" id={ids.NAVBAR}>
                <nav>
                    <Brand brandName={"Instagram"}></Brand>
                    <Searchbar></Searchbar>
                    <div id={ids.NAVIGATION_BUTTONS}>
                        {/* Home Icon */}
                        <Icon classNames={navigationIconClassNames} src={icons.HOME} alt="Home Icon"></Icon>

                        {/* Chat Icon */}
                        <Icon classNames={navigationIconClassNames} src={icons.CHAT_BUBBLE} alt="Chat Icon"></Icon>

                        {/* Explore Icon */}
                        <Icon classNames={navigationIconClassNames} src={icons.EXPLORE} alt="Explore Icon"></Icon>

                        {/* Activity Icon */}
                        <Icon classNames={navigationIconClassNames} src={icons.HEART} alt="Activity Icon"></Icon>
                        
                        {/* Profile Settings */}
                        <Avatar avatarUrl={this.props.profilePictureUrl} alt={this.props.altUserName}></Avatar>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    const profilePicture = state.profilePicture;
    return {...profilePicture};
}

export default connect(mapStateToProps, {addProfilePicture})(Navbar);