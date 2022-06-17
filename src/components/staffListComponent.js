import React, {Component} from "react";
import { Card, CardTitle } from "reactstrap";
import StaffInfo from "./staffInfoComponent";

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        };
    }

    selectedStaff(staff) {
        this.setState({ selectedStaff: staff})
    }

    render() {
        const staff = this.props.staff.map(staff => {
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 m-0.5">
                    <Card onClick={() => this.selectedStaff(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {staff}
                </div>
                <div className="row">
                    <StaffInfo selectedStaff={this.state.selectedStaff} />
                </div>
            </div>
        );
    }
}

export default StaffList;