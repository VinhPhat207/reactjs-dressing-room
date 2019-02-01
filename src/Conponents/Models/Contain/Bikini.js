import React, { Component } from 'react';

class Bikini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: {
                // .bikinitop
                bikinitopClass: {
                    width: "250px",
                    height: "500px",
                    background: 'url("images/allbody/bikini_branew.png")',
                    position: "absolute",
                    top: "12%",
                    left: "22%",
                    zIndex: "1"
                },

                // .bikinibottom
                bikinibottomClass: {
                    width: "250px",
                    height: "500px",
                    background: 'url("images/allbody/bikini_pantsnew.png")',
                    position: "absolute",
                    top: "12%",
                    left: "22%",
                    zIndex: "1"
                }
            }
        }
    }

    changeStyles = () => {
        this.setState({
            styles: {
                 // .bikinitop
                 bikinitopClass: {
                    width: "500px",
                    height: "500px",
                    // background: `url(${this.props.imgSrc_2})`,
                    position: "absolute",
                    top: "-9%",
                    left: "-5%",
                    zIndex: "3",
                    transform: "scale(0.5)"
                },

                // .bikinibottom
                bikinibottomClass: {
                    width: "250px",
                    height: "500px",
                    // background: 'url("images/allbody/bikini_pantsnew.png")',
                    position: "absolute",
                    top: "12%",
                    left: "22%",
                    zIndex: "1"
                }
            }
        })
    }

    // componentWillReceiveProps = () => { // giup render lai components khi truyen item tu cha sang con
    //     //this.changeStyles();
    //     console.log("abc");
        
    // }

    render() {
        let bikinitopClass = this.state.styles.bikinitopClass;
        let bikinibottomClass = this.state.styles.bikinibottomClass;

        let background;

        if (this.props.item) {
            background = `url(${this.props.item.imgSrc_png})`;
            bikinitopClass = {...bikinitopClass, background};
        }


        // if (this.props.item) {
        //     background = `url(${this.props.item.imgSrc_png})`;
        //     bikinitopClass = {...bikinitopClass, background};
        // }

        return (
            <div className="bikini">
                <div className="bikinitop" style={bikinitopClass}></div>
                <div className="bikinibottom" style={bikinibottomClass}></div>
            </div>
        );
    }
}

export default Bikini;