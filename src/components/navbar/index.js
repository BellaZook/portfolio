import React from 'react';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
import './navbar.css';

export default class AppNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="fixed-top nav-bg" color="" dark expand="md">
                    <NavbarBrand href="/">ANTHONY.ROBIN</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto cl-white" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/BellaZook?tab=repositories" className="cl-white">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/BellaZook?tab=repositories">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Go To:
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="#developer">Web Developer</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="#experience">Experience</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="#about-me">About Me</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="#skills">Skills</a>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>

                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}