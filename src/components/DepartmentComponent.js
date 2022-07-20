import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

class Departments extends Component {
    
    render() {
        const departments = this.props.departments.map(dept => {
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