import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class ComicDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComicAdded: false,
            showPopUp: false,
            comicsDesc: this.props.comicInfo,
        };
        //console.log("ComicDescription", this.state.comicsDesc);
        //const comicInfoTable = props => {this.props.comicInfo};
    }

    render() {
        return (
            <div className ="Comic_Description">
                <div className = "popup" id = "above">
                    <p className = "popup_title">{this.state.comicsDesc.fullTitle}</p>
                    <p className = "popup_description">UPC: {this.state.comicsDesc.upc_no}</p>
                    <p className = "popup_info">Publisher: {this.state.comicsDesc.publisher}</p>
                    <p className = "popup_price">Price: {this.state.comicsDesc.price}</p>
                    <img className = "popup_img" src = {"http://www.pullscription.com/pictures/" + this.state.comicsDesc.image} />
                    <button className = "popup_pull" href = "#">+</button>
                </div>
            </div>
        );
    }
}