import React, { Component } from 'react';

import './Joke.css';

class Joke extends Component {
    constructor(props) {
        super(props);


    }
    // Get Color Function
    getColor() {
        if (this.props.votes >= 15){
            return "#4caf50";
        } else if (this.props.votes >= 10) {
            return "#8bc34a";
        } else if (this.props.votes >= 6) {
            return "#ffeb3b";
        } else if (this.props.votes >= 3) {
            return "#ff9800";
        } else {
            return "#f44336";
        }
    }
    render() {
        return(
            <div className="Joke">
                <div className="jokeButtons">
                    <i className="fa fa-arrow-up" onClick={this.props.upVote}></i>
                    <span className="votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
                    <i className="fa fa-arrow-down" onClick={this.props.downVote}></i>
                </div>
                <p className="jokeText">{this.props.text}</p>
            </div>
        )
    }
}

export default Joke;