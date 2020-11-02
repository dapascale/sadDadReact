import React, { Component } from 'react';
import axios from 'axios';
import './JokeList.css';

import Sidebar from './Sidebar';


class JokeList extends Component {
    // Default props passed in at start
    static defaultProps = {
        numOfJokes: 10
    };

    // Initialize state
    constructor(props) {
        super(props)
        this.state = { 
            // Empty jokes array to be filled with ten jokes at a time
            jokes: [],
        };
    }

    // Make API call
    async componentDidMount() {
        // Load Jokes
        let jokes = [];
        while(jokes.length < this.props.numOfJokes) {
            let res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {Accept: 'application/json'} 
            });
            jokes.push(res.data.joke);
        }
        this.setState({
            jokes: jokes,
        })
    }

    render() {
        return (
            <div className="jokeList">
                <Sidebar />
                <div className="jokeListJokes">
                    {this.state.jokes.map(joke => (
                        <div>{joke}</div>
                    ))}
                </div>
            </div>
        )
    }
}



export default JokeList;