import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import { STAFFS } from "../staffs";

class ColumnDisplay extends Component {

    render() {
        const btn = 
            <div className="container">
                <div className="row my-3 justify-content-flexstart">
                    <label htmlFor="dropdown">Số cột: </label>
                    <select id="dropdown" onChange={this.props.onChange}>
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
            </div>
        );
    }
}

export default ColumnDisplay;