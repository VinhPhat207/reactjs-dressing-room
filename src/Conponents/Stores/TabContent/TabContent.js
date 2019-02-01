import React, { Component } from 'react';

// IMPORT COMPONENTS
import TabPane from './TabPane/TabPane'
import buttonArray from '../../../Data/buttonArray'

// IMPORT DATA
import dressingRoom from '../../../Data/GetData'

class TabContent extends Component {
    render() {
        let elmTabPane = buttonArray.map((btn, index) => {
            return (
                <TabPane
                    key={index}
                    btn={btn}
                    dressingRoom={dressingRoom}
                    transferItem={this.props.transferItem}
                />
            );
        });

        return (
            <div className="tab-content">
                {
                    elmTabPane
                }
            </div>
        );
    }
}

export default TabContent;