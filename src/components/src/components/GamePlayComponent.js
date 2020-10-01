import React, { Component } from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap'
//import { PROMPTS } from './prompts';

class GamePlay extends Component {
    
    render() {
        return (
            <React.Fragment>
            <Form>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
            </Form>
        </React.Fragment>
        );
    }
}
export default GamePlay;   