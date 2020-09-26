import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
                <Jumbotron fluid className="p-0">
                    <Navbar dark color="warning" expand="md">
                        <div className="container">
                            <div className="row">
                                <div className="row col-12">
                                    <div className='col-12 col-md-2'>
                                        <img src="/assets/images/logo2.png" height="90" alt="Turn of Phrase Logo" />
                                    </div>
                                    <div>
                                        <NavbarToggler onClick={this.toggleNav} />

                                        <Collapse isOpen={this.state.isNavOpen} navbar>
                                            <Nav navbar>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/home">
                                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/about">
                                                        <i className="fa fa-list fa-lg" /> About
                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/aboutus">
                                                        <i className="fa fa-info fa-lg" /> Demo
                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/team">
                                                        <i className="fa fa-info fa-lg" /> Team
                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className="nav-link" to="/feedback">
                                                        <i className="fa fa-address-card fa-lg" />Feedback
                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </Collapse>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <h1>Turn of Phrase</h1>
                                    <h2>A Mobile Based Brain Teaser Game</h2>
                                </div>
                            </div>

                        </div>
                    </Navbar>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;