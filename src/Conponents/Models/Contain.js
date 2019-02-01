import React, { Component } from 'react';

// IMPORT COMPONENTS
import Body from './Contain/Body'
import Model from './Contain/Model'
import Bikini from './Contain/Bikini'
import Feet from './Contain/Feet'

class Contain extends Component {
    render() {
        const styles = {
            // .contain
            containClass: {
                width: "460px",
                height: "590px",
                margin: "0 auto",
                background: 'url("images/background/background_998.jpg")',
                position: "relative"
            }
        }

        return (
            <div className="contain" style={styles.containClass}>
                <Body></Body>
                <Model></Model>
                <Bikini item={this.props.item}></Bikini>
                <Feet></Feet>
            </div>
        );
    }
}

export default Contain;