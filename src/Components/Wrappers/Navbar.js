import ActivityIcon from 'Components/Common/ActivityIcon';
import { Avatar } from 'Components/Common/Avatar';
import Brand from 'Components/Common/Brand';
import ExploreIcon from 'Components/Common/ExploreIcon';
import HomeIcon from 'Components/Common/HomeIcon';
import MessagesIcon from 'Components/Common/MessagesIcon';
import Searchbar from 'Components/Common/Searchbar';
import React, { Component } from 'react';
import { ids } from 'Registry';

class Navbar extends Component {
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
                        <Avatar avatarUrl={this.props.avatarUrl} alt={this.props.userName}></Avatar>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;