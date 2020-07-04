import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css';

import ComicBookTile from './ComicBookTile';
import Login from './login';
import SearchPage from './Search';

import searchIcon from './assets/search1.svg';
import browseIcon from './assets/browse1.svg';
import listIcon from './assets/list1.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: {},
            pulledComics: [],
            tiles: []
        };
        
    }

    getComics = async (request) => {
        //console.log("getting comics....");
        var result = {};
        const comicsRequest = new Request(request);
        return fetch(comicsRequest);
        //const comics = comicsRequest.json();
        //console.log(comics);
    }

    async componentDidMount() {
        //console.log(comics);
        const self = this;
        let request = "http://173.255.241.100:8000/api/comics/";
        const comicsResponse = await this.getComics(request);
        const comics = await comicsResponse.json();
        //console.log("componentDidMount: comics = ", comics);
        self.setState({comics:comics});

        var count = 0;
        let comicsArray = [];
        for (let i = 0; i < this.state.comics.length; i++) {
            let comic = this.state.comics[i];
            //console.log("comics[" + i + "]: ", comic);
            comicsArray.push(comic);
        }
        
        const tiles = comicsArray.map(
            (comic) => {
                
                return <ComicBookTile
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
                    onAddComic={this.pull}
                    onRemoveComic={this.unpull}
                />
                
            }

        );
        self.setState({tiles:tiles});
            //console.log(this.state.tiles);
    }

    renderComicBookTile = (info) => {
        return (
            <ComicBookTile
                comicInfo={info}
                eventInfo={{
                    fullTitle: this.props.comics.full_title,
                    writer: this.props.comics.writer,
                    price: "$"+this.props.comics.price
                }}
                onAddComic={this.pull}
                onRemoveComic={this.unpull}
            />
        );
    }
    


    render() {

        
        //console.log("Header.render: comicsArray := ", this.state.tiles);
        

        return (

            <Router>
            <div className = "Header"> 
                <header>
                    <nav>
                        <p className = "title">Pullscription</p>
                        <div className ="icons">
                            <div className = "icon">
                            <a href = "#" ><img src = {browseIcon} alt = "browse"/></a>
                                <div className = "icon_info">
                                <Link to="/">Browse</Link>
                                </div>
                            </div>
                            <div className = "icon">
                            <a href = "#" ><img src = {searchIcon}/></a>
                                <div className = "icon_info">
                                    <Link to="/search">Search</Link>
                                </div>
                            </div>
                            <div className = "icon">
                            <a href = "#" ><img src = {listIcon}/></a>
                                <div className = "icon_info">
                                    <Link to="/pull">Pull List</Link>
                                </div>
                            </div>
                        </div>
                        <button className = "login_button" ><Link to="/login">Sign In</Link></button>
                    </nav>
                </header>
                
            </div>
    
        <Switch>
        <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/search">
              {console.log("Comic Tiles Within Search:" ,this.state.tiles)}
            <Search comicTiles={this.state.tiles}  />
          </Route>
          <Route path="/pull">
            <Pull />
          </Route>
          <Route path="/">
            <Browse comicTiles={this.state.tiles} />
          </Route>
        </Switch>
        </Router>
    
        );
    }

}

function Browse({comicTiles}) {
    //console.log("Comic Tiles Within Browse:" ,comicTiles);
    //var firstFifty = {};
    return (
    <div className="content_box"><h2>Browse</h2><br /><br />{comicTiles}</div>
    );
  }
  
  function Search(comicTiles) {
    return (
        <div className="content_box"><h2>Search</h2><br /><br /><SearchPage comicTiles={comicTiles}/></div>
    );
  }
  
  function Pull() {
    return (
        <div className="content_box"><h2>Pull List</h2><br /><br />YOU'LL SEE IT SOON!</div>
    );
  }
  function SignIn() {
    return (
        <div className="content_box"><h2>Sign In</h2><br /><br /><Login /></div>
    );
  }