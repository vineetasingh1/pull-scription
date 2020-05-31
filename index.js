import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import searchIcon from './assets/search1.svg';
import browseIcon from './assets/browse1.svg';
import listIcon from './assets/list1.svg';


class Home extends React.Component {
    render() {
        return (
            <div className = "Home"> 
                <header>
                    <nav>
                        <p className = "title">Pullscription</p>
                        <div className ="icons">
                            <div className = "icon">
                                <image src = {browseIcon}/>
                                <div className = "icon_info">
                                    <a href = "#" >Browse</a>
                                </div>
                            </div>
                            <div className = "icon">
                                <image src = {searchIcon}/>
                                <div className = "icon_info">
                                    <a href = "#" >Search</a>
                                </div>
                            </div>
                            <div className = "icon">
                                <image src = {listIcon}/>
                                <div className = "icon_info">
                                    <a href = "#" >Pull List</a>
                                </div>
                            </div>
                        </div>
                        <button className = "button" href = "#">Sign In</button>
                    </nav>
                </header>
                <section className = "info">
                </section>
            </div>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );