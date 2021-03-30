import ActivityIcon from 'Components/Common/ActivityIcon';
import { Avatar } from 'Components/Common/Avatar';
import Brand from 'Components/Common/Brand';
import ExploreIcon from 'Components/Common/ExploreIcon';
import HomeIcon from 'Components/Common/HomeIcon';
import MessagesIcon from 'Components/Common/MessagesIcon';
import Searchbar from 'Components/Common/Searchbar';
import React, { Component } from 'react';
import { ids, otherConstants } from 'Registry';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            image : '',
            name : ''
        }
    }
    async componentDidMount(){
        try{
            let data = await fetch(otherConstants.DATA_FILE);
            data = await data.json();
            this.setState({
                avatarUrl : data.profilePicture,
                userName : data.name
            });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        return (
            <header className="container" id={ids.NAVBAR}>
                <nav>
                    <Brand brandName={"Instagram"}></Brand>
                    <Searchbar></Searchbar>
                    <div id={ids.NAVIGATION_BUTTONS}>
                        <HomeIcon></HomeIcon>
                        <MessagesIcon></MessagesIcon>
                        <ExploreIcon></ExploreIcon>
                        <ActivityIcon></ActivityIcon>
                        <Avatar avatarUrl={this.state.avatarUrl} alt={this.state.userName}></Avatar>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;