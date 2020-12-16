import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import './JokeList.css';
import './Sidebar.css';
import { v4 as uuidv4 } from 'uuid';
import sadDad1 from './assets/mansad1.gif';
import gladDad1 from './assets/manhappy1.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons'

const spinner = <FontAwesomeIcon icon={faDiceSix} />


class JokeList extends Component {
    // Default props passed in at start
    static defaultProps = {
        numOfJokes: 10
    };

    // Initialize state
    constructor(props) {
        super(props);
        this.state = { 
            // Empty jokes array to be filled with ten jokes at a time
            jokes: JSON.parse(window.localStorage.getItem("jokes")|| "[]"),
            loading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Make API call
    componentDidMount() {
        // Load Jokes ONLY if there are none
        if(this.state.jokes.length === 0) {
            this.getJokes();
        }
    }

    // handleClick Function
    handleClick() {
        this.setState({
            loading: true,
        },
        this.getJokes
        )}

    // Get Jokes Function
    async getJokes() {
        let jokes = [];
        while (jokes.length < this.props.numOfJokes) {
            let res = await axios.get('https://icanhazdadjoke.com/', {
                headers: {Accept: 'application/json'} 
            });
            jokes.push({id: uuidv4(), text: res.data.joke, votes: 0});
        }
        this.setState(state => ({
            loading: false,
            jokes: [...state.jokes, ...jokes]
        }));
        window.localStorage.setItem(
            "jokes",
            JSON.stringify(jokes)
        )
    }

    // Vote Function
    handleVote = (id, change) => {
        this.setState(state => ({
            jokes: state.jokes.map(joke =>
                joke.id === id ? {...joke, votes: joke.votes + change} : joke
            )
        }),
        () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        )
    }

    render() {
        if (this.state.loading === true) {
            return (
                <div className="spinner">
                    <i className="title2 far fa-8x fa-compact-disc fa-spin"></i>
                    <h1 className="title2">Loading...</h1>
                </div>
            )
        }
        return (
            <div className="JokeList">
                <div className="Sidebar">
                    <h1><span className="title1">Make Your </span><span className="title2">Sad Dad</span><span className="title3"> Glad</span></h1>
                    <button className="moreJokes" onClick={this.handleClick}>
                    <img 
                    src={sadDad1} alt="face of a very sad man"
                    onMouseOver={e => e.currentTarget.src = gladDad1} 
                    onMouseOut={e => e.currentTarget.src = sadDad1} 
                    />
                    new jokes
                    </button>
                </div>
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