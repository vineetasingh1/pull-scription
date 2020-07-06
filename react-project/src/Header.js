import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css';

import ComicBookTile from './ComicBookTile';
import SignInBox from './SignInBox';
import Login from './login';
import SearchPage from './Search';
import SignUpForm from './SignUp';

import searchIcon from './assets/search1.svg';
import browseIcon from './assets/browse1.svg';
import listIcon from './assets/list1.svg';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: {},
            pulledComics: [],
            tiles: [],
            displayed_form: '',
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
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
        if (this.state.logged_in) {
            fetch('http://localhost:8000/current_user/', {
              headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
              }
            })
              .then(res => res.json())
              .then(json => {
                this.setState({ username: json.username });
              });
          }
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
    
    handle_login = (e, data) => {
        console.log("In Handle_login");
        e.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
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
          console.log("after token set");
      };
    
      handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/users/', {
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
      };
    
      display_form = form => {
        this.setState({
          displayed_form: form
        });
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
                        <SignInBox />
                    </nav>
                </header>
                <SignInBox 
                  logged_in={this.state.logged_in}
                  display_form={this.display_form}
                  handle_logout={this.handle_logout}
                />
            </div>
    
        <Switch>
        <Route path="/login">
            <SignIn handle_login={this.handle_login} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/search">
        {/*console.log("Comic Tiles Within Search:" ,this.state.tiles*/}
            <Search comicTiles={this.state.tiles} />
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
  
  function Search({comicTiles}) {
    return (
        <div className="content_box"><h2>Search</h2><br /><br /><SearchPage comicTiles={comicTiles}/></div>
    );
  }
  
  function Pull() {
    return (
        <div className="content_box"><h2>Pull List</h2><br /><br />YOU'LL SEE IT SOON!</div>
    );
  }
  function SignIn({handle_login}) {
    return (
        <div className="content_box"><h2>Sign In</h2><br /><br /><Login handle_login={handle_login}/></div>
    );
  }
  function SignUp() {
    return (
        <div className="content_box"><h2>Sign Up!</h2><br /><br /><SignUpForm /></div>
    );
  }