import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { connect } from "react-redux";
import { addStaff } from "../actions/search";

class AddStaff extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isFormOpen: false,
            newStaff: {}
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({ isFormOpen: !this.state.isFormOpen})
    }

    handleSubmit(value) {
        this.toggleForm();
        console.log(value)
    }

    render() {
        return (
            <div className="container">
                <div className="row add-staff">
                    <Button type="submit" value="submit" color="primary" onClick={this.toggleForm}><strong>+</strong></Button>
                    <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
                        <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
                        <ModalBody className="col-12 col-md-12">
                            <LocalForm  onSubmit={value => this.handleSubmit(value)}>
                                <Row className="form-group">
                                    <Label htmlFor="name" className="col-md-3">Tên</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".name" name="name" placeholder="Tên nhân viên" className="form-control"/>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="dob" className="col-md-3">Ngày sinh</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".dob" name="dob" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.onChange}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="startDate" className="col-md-3">Ngày vào công ty</Label>
                                    <Col className="col-md-8">
                                        <Control type="date" model=".startDate" name="startDate" className="form-control"
                                            value={this.state.tenState}
                                            onChange={this.onChange}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="department" className="col-md-3">Phòng ban</Label>
                                    <Col className="col-md-8">
                                        <Control.select model=".department" name="department" className="form-control"
                                            onChange={this.onChange}
                                        >
                                            {this.props.departments.map(dept => <option key={dept.id}>{dept.name}</option>)}
                                        </Control.select>
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="salaryScale" className="col-md-3">Hệ số lương</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".salaryScale" name="salaryScale" className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave"className="col-md-3">Số ngày nghỉ còn lại</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".annualLeave" name="annualLeave" className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime" className="col-md-3">Số ngày đã làm thêm</Label>
                                    <Col className="col-md-8">
                                        <Control.text model=".overTime" name="overTime" className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </Col>  
                                </Row>
                                <Row className="form-group">
                                    <Col className="col-5">
                                        <Button type="submit" value="submit" color="primary">Thêm</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    staffs: state.staffs,
    departments: state.departments
});

export default connect(mapStateToProps, { addStaff })(AddStaff);