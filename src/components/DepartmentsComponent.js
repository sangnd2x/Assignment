import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { motion } from "framer-motion";

class Departments extends Component {
    
    render() {
        const departments = this.props.departments.map(dept => {
            return (
                <motion.div
                    initial={{ x: 50}}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    key={dept.id} className={"col-12" + " " + "col-md-" + (12 / this.props.column) + " " + "col-lg-" + (12 / this.props.column)}>
                    <Link to={`/departments/${dept.id}`} style={{ textDecoration: "none", color: "#000000", paddingTop: "10px" }}>
                        <Card className="dept">
                            <div className={`${dept.icon}, dept-icon`}></div>
                            <CardTitle>{dept.name}</CardTitle>
                            <CardBody>
                                <CardText>Số nhân viên: {dept.numberOfStaff}</CardText>
                            </CardBody>
                        </Card>
                    </Link>
                </motion.div>
            );
        });

        if (this.props.deparmentsLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.deparmentsError) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.deparmentsError}</h4>
                    </div>
                </div>
            );
        } else { 
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to="/staffs">Trang chủ</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className="col-12">
                            <h3>Phòng Ban</h3>
                        </div>
                    </div>
                    <div className="row">
                        {departments}
                    </div>
                </div>  
            );
        }
    }
}

export default Departments;