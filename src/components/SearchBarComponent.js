import React, { Component } from "react";
import { Form, Input, Button, FormGroup } from "reactstrap";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(this.name.value);
    }

    render() {
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <FormGroup className="search-bar">
                    <Input type="text" placeholder="Nhập tên nhân viên...." innerRef={input => this.name = input} />
                    <Button type="submit" color="primary">Tìm</Button>
                </FormGroup>  
            </Form>
        );
    }
}

export default SearchBar;