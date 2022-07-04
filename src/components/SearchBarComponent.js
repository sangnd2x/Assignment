import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler, Nav, Form, Input, Button, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";
import { Control, LocalForm, Errors } from "react-redux-form";


class SearchBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <LocalForm className="search-bar">
            <Control.text model="text" placeholder="Nhập tên nhân viên...." />
            <Button type="submit" color="primary">Tìm</Button>  
        </LocalForm>
        );
    }
}

export default SearchBar;