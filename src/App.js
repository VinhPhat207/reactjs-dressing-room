import React, { Component } from 'react';
import './App.css';

// IMPORT COMPONENTS
import Contain from './Conponents/Models/Contain'
import BtnGroup from './Conponents/Stores/BtnGroup'
import Store from './Conponents/Stores/Store';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null
      // chosenItems: []
    }
  }

  transferItem = (item) => {
    this.setState({
      item: item,
      // chosenItems: [...this.state.chosenItems, item]
    })
  }

  render() {
    console.log(this.state.chosenItems);

    return (      
      <div className="App container-fluid">
        <h1><strong>DỰ ÁN PHÒNG THAY ĐỒ</strong></h1>
        <br />
        <div className="row">
          {/* Các phụ kiện */}
          <div className="col-md-8 col-lg-8">
            <BtnGroup></BtnGroup>
            <Store transferItem={this.transferItem}></Store>
          </div>

          {/* Người mẫu */}
          <div className="col-md-4 col-lg-4">
            <Contain item={this.state.item}></Contain>
          </div>
        </div>
      </div>
    );
  }
}

export default App;