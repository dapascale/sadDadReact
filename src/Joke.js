import React, { Component } from 'react';

import './Joke.css';

class Joke extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="Joke">
                <div className="jokeButtons">
                    <i className="fa fa-arrow-up" onClick={this.props.upVote}></i>
                    <span className="votes">{this.props.votes}</span>
                    <i className="fa fa-arrow-down" onClick={this.props.downVote}></i>
                </div>
                <p className="jokeText">{this.props.text}</p>
                <div className="emoji"><i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i></div>
            </div>
        )
    }
}

export default Joke;