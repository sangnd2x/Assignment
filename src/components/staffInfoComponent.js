import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, Breadcrumb, BreadcrumbItem, Button } from "reactstrap"
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import EditStaff from "./EditStaffComponent";

class StaffInfo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: this.props.selectedStaff,
            departments: this.props.departments
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const confirm = window.confirm("Bạn có chắc là muốn xoá nhân viên này?");
        if (!confirm) return;
        else this.props.deleteStaff(this.props.selectedStaff.id);
    }

    render() {
        const staff = this.state.selectedStaff;
        

        if (staff == null) {
            return (
                <div></div>
            )
        } else {
            const birthDate = new Date(staff.doB);
            const joinDate = new Date(staff.startDate);
            const dept = this.props.departments.filter(dept => dept.id.includes(staff.departmentId))[0];
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/staffs">Nhân Viên</Link>
                                </BreadcrumbItem>
                                    <BreadcrumbItem active>{staff.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="col-12">
                            <h3>{staff.name}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <Card className="col-12 col-md-12 col-lg-12">
                            <CardBody className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <CardImg width="250" height="250" src={staff.image} alt={staff.name}/>
                                </div>
                                <div className="col-lg-7 col-md-6 col-12">
                                    <CardText><span>Ngày sinh:</span> {dateFormat(birthDate, "dd/mm/yyyy")}</CardText>
                                    <CardText><span>Ngày vào công ty:</span> {dateFormat(joinDate, "dd/mm/yyyy")}</CardText>
                                    <CardText><span>Phòng ban:</span> {dept.name} </CardText>
                                    <CardText><span>Số ngày nghỉ còn lại:</span> {staff.annualLeave}</CardText>
                                    <CardText><span>Số ngày đã làm thêm:</span> {staff.overTime}</CardText>
                                </div>
                                <div className="btn">
                                    <div className="edit-btn">
                                        <EditStaff staff={this.state.selectedStaff}
                                            departments={this.state.departments}
                                            updateStaff={this.props.updateStaff}
                                        />
                                    </div>
                                    <div className="del-btn">
                                        <Link to="/staffs">
                                            <Button type="submit" color="danger" onClick={this.handleSubmit}>Xoá</Button>
                                        </Link>
                                    </div>
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