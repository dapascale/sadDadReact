import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import './JokeList.css';
import { v4 as uuidv4 } from 'uuid';
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
            jokes.push({id: uuidv4(), text: res.data.joke, votes: 0});
        }
        this.setState({
            jokes: jokes,
        })
    }

    // Vote Function
    handleVote = (id, change) => {
            this.setState(state => ({
                jokes: state.jokes.map(joke =>
                    joke.id === id ? {...joke, votes: joke.votes + change} : joke)
                })
            )
        }

    render() {
        return (
            <div className="JokeList">
                <Sidebar />
                <div className="jokeListJokes">
                    {this.state.jokes.map(joke => (
                        <Joke 
                        key={joke.id} 
                        votes={joke.votes} 
                        text={joke.text} 
                        upVote={() => this.handleVote(joke.id, 1)}
                        downVote={() => this.handleVote(joke.id, -1)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}



export default JokeList;