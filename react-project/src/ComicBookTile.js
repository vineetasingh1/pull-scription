import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ComicDescription from './ComicDescription';

export default class ComicBookTile extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            isComicAdded: false,
            showPopUp: false,
        };
    }

    addComic() {
        const {onAddComic, comicInfo} = this.props;
        let comicAdded = this.state.isComicAdded;
        this.setState({
            isComicAdded: !comicAdded,
        });
        onAddComic(comicInfo);
    }
    
    unaddComic() {
        const {onRemoveComic, comicInfo} = this.props;
        let comicAdded = this.state.isComicAdded;
        this.setState({
            isComicAdded: !comicAdded,
        });
        onRemoveComic(comicInfo);
    }
    

    togglePopUp() {
        this.setState ({
            showPopUp: !this.state.showPopUp
        });
    }

    render() {
        //console.log(this.props);
        return (
            <div className = "Comic_Tile">
                <div className = "tile">
                    <button className = "tile_title" onClick = {this.togglePopUp.bind(this)}>{this.props.eventInfo.fullTitle}</button>
                    

                    {this.state.showPopUp ? <ComicDescription comicInfo={this.props.comicInfo}/> : null}
                    <p className = "tile_writer">Writer: {this.props.eventInfo.writer}</p>
                    <div className = "tile_cover">
                        <img className = "tile_img comic_thumbnail" src={"http://www.pullscription.com/pictures/" + this.props.eventInfo.image} />
                    </div>
                    <p className = "tile_price">{this.props.eventInfo.price}</p>
                    <button className = "tile_pull" href = "#">+</button>
                </div>
            </div>
        );
    }

}
