import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, CardText } from "reactstrap";
import { Link } from "react-router-dom";


class StaffList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const staff = this.props.staff.map(staff => {
            return (
                <div key={staff.id} className={"col-12" + " " + "col-md-" + (12/this.props.column) + " " + "col-lg-" + (12/this.props.column)}>
                    <div>
                        <Link to={`/staffs/${staff.id}`} style={{ textDecoration: "none", color: "#000000", paddingTop: "10px" }}>
                            <CardBody className="staff">
                                <CardImg width="220" height="220" src={staff.image} alt={staff.name} />
                                <CardText><span>{staff.name}</span></CardText>
                            </CardBody>
                        </Link>
                    </div>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb className="breadcrumb">
                        <BreadcrumbItem>
                            <Link to="/staffs" >Trang chủ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Nhân Viên</h3>
                    </div>
                </div>
                <div className="row">
                    {staff}
                </div>
            </div>
        );
    }
}

export default StaffList;