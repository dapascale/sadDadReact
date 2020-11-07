import React, { Component } from 'react';
import sadDad1 from './assets/mansad1.gif';
import gladDad1 from './assets/manhappy1.gif';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return(
            <div className="Sidebar">
                <h1><span className="title1">Make Your </span><span className="title2">Sad Dad</span><span className="title3"> Glad</span></h1>
                <button className="moreJokes">
                    <img 
                    src={sadDad1} alt="face of a very sad man"
                    onMouseOver={e => e.currentTarget.src = gladDad1} 
                    onMouseOut={e => e.currentTarget.src = sadDad1} 
                    />
                    new jokes
                </button>
            </div>
        )
    }
}

export default Sidebar;