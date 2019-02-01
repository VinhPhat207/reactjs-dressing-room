import React, { Component } from 'react';

// DATA

class Item extends Component {
    getItem = () => {
        this.props.transferItem(this.props.item);
    }
    
    render() {
        return (
            <div className="col-md-4">
                <img
                    src={this.props.item.imgSrc_jpg}
                    alt={this.props.item.desc}
                />

                <br />
                <br />
                <button onClick={this.getItem}>Thay Đồ</button>
            </div>
        );
    }
}

export default Item;