import { Avatar } from 'Components/Common/Avatar';
import Brand from 'Components/Common/Brand';
import Icon from 'Components/Common/Icon';
import Searchbar from 'Components/Common/Searchbar';
import React, { useEffect, useState } from 'react';
import { ids, classes, otherConstants, icons } from 'Registry';

import { useDispatch } from 'react-redux'
import {addProfilePicture} from 'Redux/reducers/profilePicture';
import { useSelector } from 'react-redux'

const Navbar = (props) => {
    
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const profilePicture = useSelector(state => state.profilePicture);

    useEffect(() => {
        async function fetchData(){
            try{
                let data = await fetch(otherConstants.DATA_FILE);
                data = await data.json();
                dispatch(addProfilePicture({
                    imageUrl : data.profilePicture,
                    altUserName : data.name
                }));
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    if(loading)
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
                    <Avatar avatarUrl={profilePicture.profilePictureUrl} alt={profilePicture.altUserName}></Avatar>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;