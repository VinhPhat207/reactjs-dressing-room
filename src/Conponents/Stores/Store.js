import React, { Component } from 'react';

// IMPORT COMPONENTS
import TabContent  from './TabContent/TabContent';

class Store extends Component {
    render() {
        return (
            <div className="well">
                <TabContent transferItem={this.props.transferItem}></TabContent>                
            </div>
        );
    }
}

export default Store;