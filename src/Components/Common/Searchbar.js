import React, { Component } from 'react';
import {ids} from 'Registry';
import search from 'Assets/icons/search-24px.svg';
class Searchbar extends Component {
    render() {
        return (
            <div id={ids.SEARCHBAR}>
                <div id="withIcon">
                    <img src={search} alt="Search" id={ids.SEARCH_ICON}></img><input type="text" placeholder="Search..."></input>
                </div>
            </div>
        );
    }
}

export default Searchbar;