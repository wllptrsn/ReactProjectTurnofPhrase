import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { GamePlay } from './GamePlay';
class Keyboard extends Component{
    constructor(props) {
        super(props);
        this.enterLetters = this.enterLetters.bind(this);
        
    }

    enterLetters(n) {
        {this.state.prompts[this.state.number].userAnswer.push(n)}

    }
    render() {
        return (
            <React.Fragment class='keyboard'>
                <Button onClick={this.enterLetters('Q')}>Q</Button>
                <Button onClick={this.enterLetters('W')}>W</Button>
                <Button onClick={this.enterLetters('E')}>E</Button>
                <Button onClick={this.enterLetters('R')}>R</Button>
                <Button onClick={this.enterLetters('T')}>T</Button>
                <Button onClick={this.enterLetters('Y')}>Y</Button>
                <Button onClick={this.enterLetters('U')}>U</Button>
                <Button onClick={this.enterLetters('I')}>I</Button>
                <Button onClick={this.enterLetters('O')}>O</Button>
                <Button onClick={this.enterLetters('P')}>P</Button><br></br>
                <Button onClick={this.enterLetters('A')}>A</Button>
                <Button onClick={this.enterLetters('S')}>S</Button>
                <Button onClick={this.enterLetters('D')}>D</Button>
                <Button onClick={this.enterLetters('F')}>F</Button>
                <Button onClick={this.enterLetters('G')}>G</Button>
                <Button onClick={this.enterLetters('H')}>H</Button>
                <Button onClick={this.enterLetters('J')}>J</Button>
                <Button onClick={this.enterLetters('K')}>K</Button>
                <Button onClick={this.enterLetters('L')}>L</Button><br></br>
                <Button onClick={this.enterLetters('Z')}>Z</Button>
                <Button onClick={this.enterLetters('X')}>X</Button>
                <Button onClick={this.enterLetters('C')}>C</Button>
                <Button onClick={this.enterLetters('V')}>V</Button>
                <Button onClick={this.enterLetters('B')}>B</Button>
                <Button onClick={this.enterLetters('N')}>N</Button>
                <Button onClick={this.enterLetters('M')}>M</Button>
            </React.Fragment>
        );
    }
}
export default Keyboard;