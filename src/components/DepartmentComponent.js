import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardImg, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

class Department extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const department = this.props.department.map(dept => {
            return (
                <div key={dept.id} className={"col-12" + " " + "col-md-" + (12/this.props.column) + " " + "col-lg-" + (12/this.props.column)}>
                    <Card className="dept">
                        <div className={`${dept.icon}, dept-icon`}></div>
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
                    <Breadcrumb className="breadcrumb">
                        <BreadcrumbItem>
                            <Link to="/home">Trang chủ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Phòng Ban</h3>
                    </div>
                </div>
                <div className="row">
                    {department}
                </div>
            </div>  
        );
    }
}

export default Department;