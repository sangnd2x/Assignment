import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

class Department extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const department = this.props.department.map(dept => {
            return (
                <div key={dept.id} className={"col-12" + " " + "col-md-" + (12/this.props.column) + " " + "col-lg-" + (12/this.props.column)}>
                    <Card className="dept">
                        <CardTitle>{dept.name}</CardTitle>
                        <CardBody>
                            <CardText>Số nhân viên: {dept.numberOfStaff}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {department}
                </div>
            </div>  
        );
    }
}

export default Department;