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

        let pulledArray = [];
        for (let i = 0; i < this.state.pulledComics.length; i++){
            let comic = this.state.pulledComics[i];
            pulledArray.push(comic);
        };

        const pulledComics = pulledArray.map(
            (comic) => {
                return 
                    <ComicBookTile
                        comicInfo={{
                            fullTitle: comic.full_title,
                            writer: comic.writer,
                            price: "$"+comic.price,
                            upc_no: comic.upc_no,
                            image: comic.stock_no+".jpg",
                            publisher: comic.publisher
                        }}
                        eventInfo={{
                            fullTitle: comic.full_title,
                            writer: comic.writer,
                            price: "$"+comic.price,
                            image: comic.stock_no+".jpg"
                        }}
                        onAddComic={() => {}}
                        onRemoveComic={this.removeFromPulledComics}
                    />
            }
        );
        this.setState({pulledComics: pulledComics})
    }
    
    removeFromPulledComics = (removedComic) => {
        const {pulledComics} = this.state;
        let comicNo = removedComic.diamd_no;
        let newPulledComics = pulledComics;
        for (let i = 0; i < newPulledComics.length; i++){
            if (comicNo === newPulledComics[i].diamd_no){
                newPulledComics.splice(i, 1);
            } 
        }
        this.setState({
            pulledComics: newPulledComics
        });
    }

    render() {
        return (
            <div>{this.state.pulledComics}</div>
        );
    }
}
