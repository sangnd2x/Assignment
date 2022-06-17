import React, { Component } from "react";
import StaffList from "./staffListComponent";
import { STAFFS } from "../staffs";

class ColumnDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            numberOfColumn: 3
        };
    }

    handleOption(e) {
        e.preventDefault();
        this.setState({ numberOfColumn: e.target.value });
    }

    render() {
        const btn = 
            <div className="container">
                <div className="row my-3 justify-content-flexstart">
                    <label htmlFor="dropdown">Column Display: </label>
                    <select id="dropdown" onChange={(e) => this.handleOption(e)}>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
            </div>
        
        return (
            <div className="container">
                <div className="row">
                    {btn}
                </div>
                <div className="row">
                    <StaffList column={this.state.numberOfColumn} staff={this.state.staffs} />
                </div>
            </div>
        );
    }
}

export default ColumnDisplay;