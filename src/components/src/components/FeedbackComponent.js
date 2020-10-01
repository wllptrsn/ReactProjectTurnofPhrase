import React, { Component } from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';
class Feedback extends Component {
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
export default Feedback;