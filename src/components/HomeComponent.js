import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="my-5 px-5 pb-5 text-center">
                    <CardBody>
                        <Row>
                            <Col lg="12" className="mb-lg-0 mb-5">

                                <h3 className="font-weight-bold mt-4 mb-3"> Turn of Phrase</h3>
                                <h2>A Mobile Based Brain Teaser Game</h2>
                                <p className="text-uppercase" color="primary">Lab Analyst</p>

                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <NavLink className="nav-link" to="/about"><Button color="warning">Tell me More</Button> </NavLink>
                            </Col>
                            <Col md="6">
                                <NavLink className="nav-link" to="/demo"><Button  color="warning">Play Demo</Button> </NavLink>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}
export default Home;