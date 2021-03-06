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
        //console.log("After constructor: ", this.state.logged_in);
    }

    getComics = async (request) => {
        //console.log("getting comics....");
        var result = {};
        const comicsRequest = new Request(request);
        return fetch(comicsRequest);
        //const comics = comicsRequest.json();
        //console.log(comics);
    }

    pull = (newComic) => {
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
        if (this.state.logged_in) {
          //console.log("inside componentDidMount, logged in being true,", this.state.logged_in);
            fetch('http://173.255.241.100:8000/current_user/', {
              headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
              }
            })
              .then(res => res.json())
              .then(json => {
                this.setState({ username: json.username });
              });
              //console.log("inside componentDidMount, logged in being true, username set?", this.state.username);
          }
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
    
    handle_login = (e, data) => {
        //console.log("In Handle_login");
        e.preventDefault();
        fetch('http://173.255.241.100:8000/token-auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              displayed_form: '',
              username: json.user.username
            });
          });
          console.log("after token set (logged in, username) :", this.state.logged_in, this.state.username);
      };
    
      handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://173.255.241.100:8000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
              logged_in: true,
              displayed_form: '',
              username: json.username
            });
          });
      };
    
      handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
        console.log("Logout Function called!");
      };

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
<<<<<<< HEAD
=======
                <SignInBox 
                  logged_in={this.state.logged_in}
                  handle_logout={this.handle_logout}
                />
>>>>>>> master
                
            </div>
    
        <Switch>
        <Route path="/login">
<<<<<<< HEAD
            <SignIn />
=======
            <SignIn handle_login={this.handle_login} />
          </Route>
          <Route path="/signup">
            <SignUp handle_signup={this.handle_signup} />
>>>>>>> master
          </Route>
          <Route path="/search">
              {console.log("Comic Tiles Within Search:" ,this.state.tiles)}
            <Search comicTiles={this.state.tiles}  />
          </Route>
          <Route path="/pull">
            <Pull pulledTiles={this.state.pulledComics}/>
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
  
  function Pull(pulledTiles) {
    return (
        <div className="content_box"><h2>Pull List</h2><br /><br /><PullList pulledTiles={pulledTiles}/></div>
    );
  }
<<<<<<< HEAD
  function SignIn() {
    return (
        <div className="content_box"><h2>Sign In</h2><br /><br /><Login /></div>
=======
  function SignUp(handle_signup) {
    return (
        <div className="content_box"><h2>Sign Up!</h2><br /><br /><SignUpForm handle_signup={handle_signup} /></div>
>>>>>>> master
    );
  }