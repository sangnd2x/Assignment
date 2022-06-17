import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap"
import dateFormat from "dateformat";

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
                        <Card className="col-12 col-md-12 col-lg-12 staff-info">
                            <CardTitle>{staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(birdthDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(joinDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </Card>
                    </div>
                </div>
            );
        }

    }
}

export default StaffInfo;