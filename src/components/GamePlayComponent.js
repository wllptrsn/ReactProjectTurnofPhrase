import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap'
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
        else{
            alert('That Concludes the available Demo');
            this.setState({
                number:0
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.prompts[this.state.number].answer}</h2>
                <button onClick={this.toggleNav}> NEXT </button>
            </React.Fragment>
        );
    }
}
export default GamePlay;   
