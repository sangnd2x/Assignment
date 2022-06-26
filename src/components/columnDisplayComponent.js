import React, { Component } from "react";

class ColumnDisplay extends Component {

    render() {
        const btn = 
                <div className="row my-3 justify-content-flexstart">
                    <div>
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
                <div className="row col-display">
                    {btn}
                </div>
            </div>
        );
    }
}

export default ColumnDisplay;