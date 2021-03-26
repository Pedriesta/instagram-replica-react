import React, { Component } from 'react';
import { ids } from '../../Registry';

class Brand extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id={ids.BRAND}>
                {this.props.brandName}
            </div>
        );
    }
}

export default Brand;