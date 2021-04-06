import { Avatar } from 'Components/Common/Avatar';
import Brand from 'Components/Common/Brand';
import Icon from 'Components/Common/Icon';
import Searchbar from 'Components/Common/Searchbar';
import React, { useEffect} from 'react';
import { ids, classes, icons } from 'Registry';

import { useDispatch } from 'react-redux'
import {fetchProfilePicture} from 'Redux/reducers/profilePicture';
import { useSelector } from 'react-redux'

const Navbar = (props) => {
    
    const dispatch = useDispatch();
    const profilePictureUrl = useSelector(state => state.profilePicture.profilePictureUrl);
    const altProfilePicture = useSelector(state => state.profilePicture.altUserName);

    const loadingStatus = useSelector(state => state.profilePicture.loadingStatus);

    useEffect(() => {
        dispatch(fetchProfilePicture());
    }, []);

    if(loadingStatus==='loading')
    return(<h1>Loading Data ...</h1>);

    if(loadingStatus==='failed')
    return(<h1>Error Loading Data ...</h1>);

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
                    <Avatar avatarUrl={profilePictureUrl} alt={altProfilePicture}></Avatar>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;