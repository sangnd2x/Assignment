import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler, Nav } from "reactstrap";
import { NavLink  } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.isNavOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar className="nav-bar" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Admin" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen}  navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/nhan-vien">
                                    Nhân Viên
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/phong-ban">
                                    Phòng Ban
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/bang-luong">
                                    Bảng Lương
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar> 
            </React.Fragment>
        );
    }
}

export default Header;

