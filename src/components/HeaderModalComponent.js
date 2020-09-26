import React, { Component } from 'react';
import { Collapse, Nav, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class HeaderModal extends Component {

    render() {
        return (
            <React.Fragment>
                <Collapse isOpen={this.props.isNavOpen} navbar id="fuck">
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
            </React.Fragment>
        );
    }
}
export default HeaderModal;