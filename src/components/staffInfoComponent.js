import React, { Component } from "react";
import { Card, CardTitle, CardBody, CardText, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap"
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

class StaffInfo extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const staff = this.props.selectedStaff;

        if (staff == null) {
            return (
                <div></div>
            )
        } else {
            const birdthDate = new Date(staff.doB);
            const joinDate = new Date(staff.startDate);
            
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Nhân Viên</Link>
                        </BreadcrumbItem>
                            <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{staff.name}</h3>
                    </div>
                </div>
                    <div className="row">
                        <Card className="col-12 col-md-12 col-lg-12">
                            <CardBody className="staff-info">
                                <div className="staff-details">
                                    <CardText><span>Ngày sinh:</span> {dateFormat(birdthDate, "dd/mm/yyyy")}</CardText>
                                    <CardText><span>Ngày vào công ty:</span> {dateFormat(joinDate, "dd/mm/yyyy")}</CardText>
                                    <CardText><span>Phòng ban:</span> {staff.department.name}</CardText>
                                    <CardText><span>Số ngày nghỉ còn lại:</span> {staff.annualLeave}</CardText>
                                    <CardText><span>Số ngày đã làm thêm:</span> {staff.overTime}</CardText>
                                </div>
                                <div className="staff-img">
                                    <CardImg width="350" height="350" src={staff.image} alt={staff.name}/>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }

    }
}

export default StaffInfo;