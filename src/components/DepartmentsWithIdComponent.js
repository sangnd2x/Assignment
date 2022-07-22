import React, { Component } from "react";
import { Card, CardBody, CardText, CardImg, Breadcrumb, BreadcrumbItem} from "reactstrap"
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class DeptStaffs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: this.props.staffs
        };
    }

    render() {
        const dept = this.props.selectedDept;
        console.log(dept);
        
        if (dept == null) {
            return (
                <div></div>
            )
        } else {
            const staffs = this.props.staffs.filter(staff => staff.departmentId === dept.id)
                .map(staff => {
                const birthDate = new Date(staff.doB);
                const joinDate = new Date(staff.startDate);
                return (
                    <Card key={staff.id} className="col-12 col-md-12 col-lg-12">
                        <CardBody className="row dept-staff">
                            <div  className="col-lg-3 col-md-4 col-12">
                                <CardImg width="250" height="250" src={staff.image} alt={staff.name}/>
                            </div>
                            <div className="col-lg-7 col-md-6 col-12">
                                <CardText><span>Tên:</span> {staff.name}</CardText>
                                <CardText><span>Ngày sinh:</span> {dateFormat(birthDate, "dd/mm/yyyy")}</CardText>
                                <CardText><span>Ngày vào công ty:</span> {dateFormat(joinDate, "dd/mm/yyyy")}</CardText>
                                <CardText><span>Phòng ban:</span> {dept.name} </CardText>
                                <CardText><span>Số ngày nghỉ còn lại:</span> {staff.annualLeave}</CardText>
                                <CardText><span>Số ngày đã làm thêm:</span> {staff.overTime}</CardText>
                            </div>
                        </CardBody>
                    </Card>
                )
            })
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/staffs">Nhân Viên</Link>
                                </BreadcrumbItem>
                                    <BreadcrumbItem active>{dept.name}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="col-12">
                            <h3>{dept.name}</h3>
                        </div>
                    </div>
                    <motion.div
                        initial={{ y: 50}}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        className="row">
                        {staffs}
                    </motion.div>
                </div>
            );
        }
    }
}

export default DeptStaffs;