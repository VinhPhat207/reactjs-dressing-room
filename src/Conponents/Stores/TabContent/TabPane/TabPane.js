import React, { Component } from 'react';

// IMPORT COMPONENTS
import Item from './Item/Item'

class TabPane extends Component {
    getListOfItems = (type) => {    // Lay danh sach Item theo tung tabpne
        let result = [];

        for (let item of this.props.dressingRoom.ListOfItems) {
            if (item.type === type) {
                result = [...result, item];
            }
        }

        return result;
    }
    
    getElmItem = (listOfItems) => {
        let elmItem = listOfItems.map((item, index) => {
            return (
                <Item
                    key={index}
                    item={item} 
                    transferItem={this.props.transferItem}
                />
            );
        })

        return elmItem;
    }

    render() {
        let elmItem = this.getElmItem(this.getListOfItems(this.props.btn.tabName));
        
        return (
            <div className="tab-pane fade in" id={`${this.props.btn.tabName}`}>
                {
                    elmItem
                }
            </div>
        );
    }
}

export default TabPane;
