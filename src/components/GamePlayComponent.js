import React, { Component } from 'react';
//import { Form, FormGroup, Label, Input } from 'reactstrap'
import { PROMPTS } from './prompts';
class GamePlay extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            prompts: PROMPTS,
            number: 0
        };
    }
    toggleNav() {
        if (this.state.number < 2) {
            this.setState({
                number: this.state.number + 1
            })
        }
        else {
            this.setState({
                number: 0
            })
        }
    }

    render() {
        var tiles = this.state.prompts[this.state.number].tiles;
        var rendertiles = tiles.map(tile => tile);
        return (
            <React.Fragment>
                <h2>{this.state.prompts[this.state.number].answer}</h2>
                <img src={this.state.prompts[this.state.number].image} width="300" alt="sad." />
                <button onClick={this.toggleNav}> NEXT </button>
                <h2>{rendertiles}</h2>

            </React.Fragment>
        );
    }
}
export default GamePlay;   
