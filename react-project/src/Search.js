import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Fade  } from 'reactstrap';
import _ from 'lodash';
 
export default class SearchPage extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            comics: []
        }
        const comics = this.props.comicTiles;
        
        
    }

    render() {
        console.log("Search: ", this.state.comics);
        return ( 
            
            <div><input type="text" value="" /><button className="search_button">Search!</button>
            </div>
               );
    }
}