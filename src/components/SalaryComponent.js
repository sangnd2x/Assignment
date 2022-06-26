import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, CardText } from "reactstrap";
import { Link } from "react-router-dom";

class Salary extends Component {
    constructor(props) {
        super(props); 

    }

    render() {
        const staff = this.props.staff.map(staff => {
            return (
                <div key={staff.id} className={"col-12" + " " + "col-md-" + (12/this.props.column) + " " + "col-lg-" + (12/this.props.column)}>
                    <div >
                        <Link to={`/nhan-vien/${staff.id}`} style={{ textDecoration: "none", color: "#000000", paddingTop: "10px" }}>
                            <CardBody className="staff">
                                <CardTitle>{staff.name}</CardTitle>
                                <CardText>Mã nhân viên: {staff.id}</CardText>
                                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                                <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                                <CardText>Lương: {staff.overTime * 2000000 + staff.salaryScale * 3000000}</CardText>
                            </CardBody>
                        </Link>
                    </div>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Trang Chủ</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Bảng Lương</h3>
                    </div>
                </div>
                <div className="row">
                    {staff}
                </div>
            </div>
        );
    }
}

export default Salary;