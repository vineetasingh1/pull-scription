import React, { Component } from 'react';
import './index.css';

import ComicBookTile from './ComicBookTile';

export default class PullList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pulledComics: []
        };
    }

    componentDidMount() {
        this.setState({
            pulledComics: this.props.pulledTiles
        });
    }

    removeFromPulledComics = (removedComic) => {
        const {pulledComics} = this.state;
        let comicId = removedComic.diamd_no;
        let newPulledComics = pulledComics;
        for (let i = 0; i < newPulledComics.length; i++){
            if (comicId === newPulledComics[i].diamd_no){
                newPulledComics.splice(i, 1);
            } 
        }
        this.setState({
            pulledComics: newPulledComics
        });
    }

    renderComicBookTile = (info) => {
        return (
            <ComicBookTile
                comicInfo={info}
                eventInfo={{
                    fullTitle: pulledComics.full_title,
                    writer: pulledComics.writer,
                    price: "$"+pulledComics.price
                }}
            onAddComic={() => {}}
            onRemoveComic={this.removeFromPulledComics}
            />
        );
    }

    render() {
        return (
            <title>Pull List</title>
        );
    }
}
