import React, { Component } from 'react';
import { ids } from '../../Registry';
import PropTypes from 'prop-types';

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
Brand.propTypes = {
    brandName : PropTypes.string
}

Brand.defaultProps = {
    brandName : "Instagram"
}
export default Brand;