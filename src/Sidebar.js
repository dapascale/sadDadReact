import React, { Component } from 'react';
import sadDad1 from './assets/mansad1.gif';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="sidebar">
                <h1 className="sadDadtitle"><span className="title1">Make Your </span><span className="title2">Sad Dad</span><span className="title3"> Glad</span></h1>
                <button className="moreJokes">
                    <img src={sadDad1} alt="face of a very sad man" />
                    new jokes
                </button>
            </div>
        )
    }
}

export default Sidebar;