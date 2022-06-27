import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, NavItem, NavbarToggler, Nav, Form, Input, Button, FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { STAFFS } from "../staffs";


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            staffs: STAFFS,
            query: '',
            searchStaff: null
        }

        this.setQuery = this.setQuery.bind(this);

    }

    setQuery(e) {
        e.preventDefault();
        this.setState({ query: e.target.value });
        console.log(this.state.query);
    }
  
    render() {
        return (
            <div className="container">
                <div className="row search-bar">
                    <Form className="search-bar" onSubmit={(e) => this.setQuery(e)}>
                        <Input type="text" placeholder="Nhập tên nhân viên...." onChange={(e) => this.setQuery(e)} />
                        <Link to={`/staffs/${(this.state.staffs.map(staff => {
                                if (staff.name.includes(this.state.query)) return staff.id
                            }))[0]}`}>
                            <Button type="submit" className="fa fa-search"></Button>  
                        </Link>
                    </Form>
                </div> 
            </div>
        );
    }
}

export default SearchBar;