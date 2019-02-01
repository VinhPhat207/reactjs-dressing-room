import React, { Component } from 'react';

class Feet extends Component {
    render() {
        const styles = {
            // .feetleft
            feetleftClass: {
                width: "25px",
                height: "41px",
                background: 'url("images/allbody/feet_high_leftnew.png")',
                position: "absolute",
                bottom: "6.5%",
                left: "40.4%",
                zIndex: "1"
            },
            // .feetright
            feetrightClass: {
                width: "25px",
                height: "41px",
                background: "url(images/allbody/feet_high_rightnew.png)",
                position: "absolute",
                bottom: "6.5%",
                right: "33.3%",
                zIndex: "1"
            }
        }

        return (
            <div className="feet">
                <div className="feetleft" style={styles.feetleftClass}></div>
                <div className="feetright" style={styles.feetrightClass}></div>
            </div>
        );
    }
}

export default Feet;