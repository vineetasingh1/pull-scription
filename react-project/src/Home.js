import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css';

import ComicBookTile from './ComicBookTile';
import ComicDescription from './ComicDescription';

import searchIcon from './assets/search1.svg';
import browseIcon from './assets/browse1.svg';
import listIcon from './assets/list1.svg';

import Header from './Header'
/*
export default function App(){
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comics: {},
    //         pulledComics: [],
    //     };
        async componentDidMount() => {
            //console.log(comics);
            const self = this;
            const comicsResponse = await this.getComics();
            const comics = await comicsResponse.json();
            //console.log("componentDidMount: comics = ", comics);
            self.setState({comics:comics});
    
        }
    }
    getComics = async () => {
        var result = {};
        const comicsRequest = new Request("http://173.255.241.100:8000/api/comics/?ordering=writer");
        return fetch(comicsRequest);
        //const comics = comicsRequest.json();
        //console.log(comics);
    }
    render() {
        //console.log("Home.render: this.state.comics := ", this.state.comics);
        var count = 0;
        let comicsArray = [];
        for (let i = 0; i < this.state.comics.length; i++) {
            let comic = this.state.comics[i];
            //console.log("comics[" + i + "]: ", comic);
            comicsArray.push(comic);
        }

        //console.log("Home.render: comicsArray := ", comicsArray);

        let tiles = comicsArray.map(
            (comic) => {
                
                return <ComicBookTile
                    comicInfo={{
                        fullTitle: comic.full_title,
                        writer: comic.full_title,
                        price: "$"+comic.price
                    }}
                    eventInfo={{
                        fullTitle: comic.full_title,
                        writer: comic.full_title,
                        price: "$"+comic.price,
                        image: comic.stock_no+".jpg"
                    }}
                    onAddComic={this.pull}
                    onRemoveComic={this.unpull}
                />
                
            }
        );
    return(
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
                    <button className = "button" ><Link to="/login">Sign In</Link></button>
                </nav>
            </header>
        </div>

    <Switch>
    <Route path="/login">
        <Login />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/pull">
        <Pull />
      </Route>
      <Route path="/">
        <Browse />
      </Route>
    </Switch>
    </Router>

    );
}}
function Browse() {
    return <h2>Browse</h2>;
  }
  
  function Search() {
    return <h2>Search</h2>;
  }
  
  function Pull() {
    return <h2>Pull List</h2>;
  }
  function Login() {
    return <h2>Sign In</h2>;
  }
*/
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: {},
            pulledComics: []
        };

    }

    async componentDidMount() {
        //console.log(comics);
        const self = this;
        //const comicsResponse = await this.getComics();
        //const comics = await comicsResponse.json();
        //console.log("componentDidMount: comics = ", comics);
        //self.setState({comics:comics});

    }

    /*pull = (newComic) => {
        const {pulledComics} = this.state;
        let newPulledComics = pulledComics;
        newPulledComics.push(newComic);
        this.setState({
            pulledComics: newPulledComics,
        });
    }

    unpull = (removedComic) => {
        const {pulledComics} = this.state;
        let comicNo = removedComic.diamd_no;
        let newPulledComics = pulledComics;
        for (let i = 0; i < newPulledComics.length; i++){
            if (comicNo === newPulledComics[i].diamd_no){
                newPulledComics.splice(i, 1);
            }
        }
        this.setState({
            pulledComics: newPulledComics,
        });
    }
    */
    // getComics = async () => {
    //     var result = {};
    //     const comicsRequest = new Request("http://173.255.241.100:8000/api/comics/");
    //     return fetch(comicsRequest);
    //     //const comics = comicsRequest.json();
    //     //console.log(comics);
    // }
    // getComics = async () => {
    //     let comicsJSON = {};
        
    //     try {
    //         const comicsResponse = new Request('http://173.255.241.100:8000/api/comics/?main_desc=chu');
    //         const comics = comicsResponse.then((value) => {
    //             if(!value.ok){
    //                 console.log("Something went wrong: ",value);
    //             }else{
    //                 //comics = value;
    //                 console.log("Success! Comics: ",value);
    //             }
    //         });
    //         comicsJSON = await comicsResponse.json();
    //         console.log("comics:");
    //         console.log(comicsResponse);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     return comicsJSON;
    // }
    
    // renderComicBookTile = (info) => {
    //     return (
    //         <ComicBookTile
    //             comicInfo={info}
    //             eventInfo={{
    //                 fullTitle: this.props.comics.full_title,
    //                 writer: this.props.comics.writer,
    //                 price: "$"+this.props.comics.price
    //             }}
    //             onAddComic={this.pull}
    //             onRemoveComic={this.unpull}
    //         />
    //     );
    // }

    render() {
        //console.log("Home.render: this.state.comics := ", this.state.comics);
        // var count = 0;
        // let comicsArray = [];
        // for (let i = 0; i < this.state.comics.length; i++) {
        //     let comic = this.state.comics[i];
        //     //console.log("comics[" + i + "]: ", comic);
        //     comicsArray.push(comic);
        // }

        // //console.log("Home.render: comicsArray := ", comicsArray);

        // let tiles = comicsArray.map(
        //     (comic) => {
                
        //         return <ComicBookTile
        //             comicInfo={{
        //                 fullTitle: comic.full_title,
        //                 writer: comic.full_title,
        //                 price: "$"+comic.price
        //             }}
        //             eventInfo={{
        //                 fullTitle: comic.full_title,
        //                 writer: comic.full_title,
        //                 price: "$"+comic.price,
        //                 image: comic.stock_no+".jpg"
        //             }}
        //             onAddComic={this.pull}
        //             onRemoveComic={this.unpull}
        //         />
                
        //     }
        // );
        return (
            <Header />
        );
    }
}
