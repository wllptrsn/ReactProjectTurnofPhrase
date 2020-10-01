import React, { Component } from 'react';
import { Jumbotron, Container, Col, Row, NavbarBrand } from 'reactstrap';
import NavModal from './NavModal.js'
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron className="bg-warning text-white">
                    <Container>
                        <Row>
                            <Col className='col-9 col-md-4'>
                                <Col className='col-12'>
                                    <NavbarBrand href="/" className="mr-auto"><img src="/assets/images/logo2.png" height="120"  alt="Turn of Phrase" /></NavbarBrand>
                                </Col>
                                <Col className="col-12 TitleText  center-block">
                                    <h2>TURN OF PHRASE</h2>
                                    <p>Mobile Brain Teaser Game</p>
                                </Col>
                            </Col>
                            <Col className="col-3 col-md-8">
                                <NavModal />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;