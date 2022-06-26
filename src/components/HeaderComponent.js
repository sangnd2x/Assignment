import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler, Nav, Form, Input, Button, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            query: '',

        };

        this.toggleNav = this.toggleNav.bind(this);

        this.getQuery = this.getQuery.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    getQuery(e) {
        e.preventDefault();
        this.setState({ query: e.target.value });
        console.log(this.state.query);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light className="nav-bar" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/bizlogo.png" height="30" width="41" alt="Admin" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen}  navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/staffs">
                                    Nhân Viên
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/departments">
                                    Phòng Ban
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/salaries">
                                    Bảng Lương
                                </NavLink>
                            </NavItem>    
                            <NavItem>
                                <Form className="search-bar" onSubmit={(e) => this.getQuery(e)}>
                                    <Input type="text" placeholder="Nhập tên nhân viên...." onChange={(e) => this.getQuery(e)}/>    
                                    <Button type="submit" className="fa fa-search"></Button>
                                </Form>
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

