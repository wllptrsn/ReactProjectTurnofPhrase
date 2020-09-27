import React, { Component } from 'react';
import { Button, Modal, Navbar, ModalHeader, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavModal extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isModalOpen: false
        };
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>

                <Button outline onClick={this.toggleModal} className='d-inline d-md-none'>
                    <i className="fa fa-bars" />
                </Button>
                <Modal isOpen={this.state.isModalOpen} navbar>
                    <ModalHeader>
                        <Button outline onClick={this.toggleModal}><i className='fa fa-times'/></Button>
                    </ModalHeader>
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
                </Modal>
                <Navbar dark className=' d-none d-md-inline'>
                    <div className="container-fluid">
                        <Nav className="navbar navbar-default">
                            <NavItem >
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fa fa-list fa-lg" /> About
                                    </NavLink>
                            </NavItem>
                            <NavItem >
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
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default NavModal;